/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useEffect } from 'react';
import {
  Content,
  InfoCard,
  MarkdownContent,
  Progress,
} from '@backstage/core-components';
import { stringifyEntityRef } from '@backstage/catalog-model';
import type { ErrorTransformer } from '@rjsf/utils';
import type { JsonValue } from '@backstage/types';
import { makeStyles } from '@material-ui/core';
import { BackstageTheme } from '@backstage/theme';
import { errorApiRef, useApi } from '@backstage/core-plugin-api';
import { type NextFieldExtensionOptions } from '../../extensions/types';
import { type FormProps } from '../../types';
import { ReviewState, ReviewStateProps } from '../ReviewState/ReviewState';
import { useTemplateParameterSchema } from '../../hooks/useTemplateParameterSchema';
import { Stepper } from '../Stepper/Stepper';
import { SecretsContextProvider } from '../../../secrets/SecretsContext';

const useStyles = makeStyles<BackstageTheme>(() => ({
  markdown: {
    /** to make the styles for React Markdown not leak into the description */
    '& :first-child': {
      marginTop: 0,
    },
    '& :last-child': {
      marginBottom: 0,
    },
  },
}));

/**
 * @alpha
 */
export interface WorkflowProps {
  title?: string;
  description?: string;
  namespace: string;
  templateName: string;
  customFieldExtensions: NextFieldExtensionOptions<any, any>[];
  transformErrors?: ErrorTransformer;
  onComplete: (values: Record<string, JsonValue>) => Promise<void>;
  onError(error: Error | undefined): JSX.Element | null;
  initialFormState?: Record<string, JsonValue>;
  FormProps?: FormProps;
  ReviewStateComponent?: (props: ReviewStateProps) => JSX.Element;
}

/**
 * @alpha
 */
export const Workflow = (workflowProps: WorkflowProps): JSX.Element | null => {
  const {
    ReviewStateComponent = ReviewState,
    FormProps = {},
    ...props
  } = workflowProps;

  const styles = useStyles();
  const templateRef = stringifyEntityRef({
    kind: 'Template',
    namespace: props.namespace,
    name: props.templateName,
  });

  const errorApi = useApi(errorApiRef);

  const { loading, manifest, error } = useTemplateParameterSchema(templateRef);

  useEffect(() => {
    if (error) {
      errorApi.post(new Error(`Failed to load template, ${error}`));
    }
  }, [error, errorApi]);

  if (error) {
    return props.onError(error);
  }

  return (
    <Content>
      {loading && <Progress />}
      {manifest && (
        <InfoCard
          title={props.title ?? manifest.title}
          subheader={
            <MarkdownContent
              className={styles.markdown}
              content={
                props.description ?? manifest.description ?? 'No description'
              }
            />
          }
          noPadding
          titleTypographyProps={{ component: 'h2' }}
        >
          <Stepper
            manifest={manifest}
            extensions={props.customFieldExtensions}
            onComplete={props.onComplete}
            FormProps={FormProps}
            initialState={props.initialFormState}
            ReviewStateComponent={ReviewStateComponent}
          />
        </InfoCard>
      )}
    </Content>
  );
};

/**
 * @alpha
 */
export const EmbeddableWorkflow = (props: WorkflowProps) => (
  <SecretsContextProvider>
    <Workflow {...props} />
  </SecretsContextProvider>
);
