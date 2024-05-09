// Copyright 2024 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, input } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Entry {
    date: string;
    entry: string;
}

@Component({
  selector: 'app-entry',
  standalone: true,
  template: `
        <div class="entry">
            <div class="date">{{entry().date}}</div>
            <div class="text">{{entry().entry}}</div>
        </div>
`,
  styles: `
    * {
        max-width: 800px;
    }
     .date {
        font-size:10px;
        font-weight:bold;
        color: #444;
        margin-bottom:5px;
    }
    .entry {
        padding: 20px 30px;
        font-family:sans-serif;
    }
`
})
export class EntryComponent {
    entry = input.required<Entry>()
}
