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

import { ApiProvider } from '@backstage/core-app-api';
import {
  MockAnalyticsApi,
  renderInTestApp,
  TestApiRegistry,
} from '@backstage/test-utils';
import { act, fireEvent } from '@testing-library/react';
import React from 'react';
import { Workflow } from './Workflow';
import { analyticsApiRef } from '@backstage/core-plugin-api';
import { ScaffolderApi } from '../../../api/types';
import { scaffolderApiRef } from '../../../api/ref';

const scaffolderApiMock: jest.Mocked<ScaffolderApi> = {
  scaffold: jest.fn(),
  getTemplateParameterSchema: jest.fn(),
  getIntegrationsList: jest.fn(),
  getTask: jest.fn(),
  streamLogs: jest.fn(),
  listActions: jest.fn(),
  listTasks: jest.fn(),
};

const analyticsMock = new MockAnalyticsApi();
const apis = TestApiRegistry.from(
  [scaffolderApiRef, scaffolderApiMock],
  [analyticsApiRef, analyticsMock],
);

describe('<Workflow />', () => {
  it('should complete a workflow', async () => {
    const onComplete = jest.fn();
    const onError = jest.fn();
    scaffolderApiMock.scaffold.mockResolvedValue({ taskId: 'xyz' });

    scaffolderApiMock.getTemplateParameterSchema.mockResolvedValue({
      steps: [
        {
          title: 'Step 1',
          schema: {
            properties: {
              name: {
                type: 'string',
              },
            },
          },
        },
      ],
      title: 'React JSON Schema Form Test',
    });

    const { getByRole, getAllByRole, getByText } = await renderInTestApp(
      <ApiProvider apis={apis}>
        <Workflow
          title="Different title than template"
          description={`
      ## This is markdown
      - overriding the template description
            `}
          onComplete={onComplete}
          onError={onError}
          namespace="default"
          templateName="docs-template"
          initialFormState={{
            name: 'prefilled-name',
          }}
          ReviewStateComponent={() => (
            <h1>This is a different wrapper for the review page</h1>
          )}
          customFieldExtensions={[]}
        />
      </ApiProvider>,
    );

    // Test template title is overriden
    expect(getByRole('heading', { level: 2 }).innerHTML).toBe(
      'Different title than template',
    );

    const input = getByRole('textbox') as HTMLInputElement;

    expect(input).toBeInTheDocument();

    expect(input.value).toBe('prefilled-name');

    await act(async () => {
      fireEvent.click(getByRole('button', { name: 'Review' }));
    });

    expect(
      getByText('This is a different wrapper for the review page'),
    ).toBeDefined();

    await act(async () => {
      fireEvent.click(getAllByRole('button')[1] as HTMLButtonElement);
    });

    expect(onComplete).toHaveBeenCalledWith({ name: 'prefilled-name' });
  });
});
