/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Graph from './../component/graph/Graph';
import { ZoomOptions } from '../component/graph/BpmnVisuOptions';

export const graph = new Graph(window.document.getElementById('graph'), { activatePanning: true });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleFileSelect(evt: any): void {
  const f = evt.target.files[0];

  const reader = new FileReader();
  reader.onload = () => {
    graph.load(reader.result as string);
  };

  reader.readAsText(f);
}

document.getElementById('bpmn-file').addEventListener('change', handleFileSelect, false);

// =====================================================================================================================
// ZOOM
// =====================================================================================================================
document.getElementById('btn-zoom-in').onclick = function() {
  graph.zoom(ZoomOptions.In);
};
document.getElementById('btn-zoom-out').onclick = function() {
  graph.zoom(ZoomOptions.Out);
};
document.getElementById('btn-zoom-actual').onclick = function() {
  graph.zoom(ZoomOptions.Actual);
};
document.getElementById('btn-zoom-fit').onclick = function() {
  graph.zoom(ZoomOptions.Fit);
};

// =====================================================================================================================
// General action
// =====================================================================================================================
document.getElementById('btn-outline').onclick = function() {
  console.info('toggle outline');
  graph.toggleOutline();
};
