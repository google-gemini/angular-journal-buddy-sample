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

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JournalComponent } from './journal.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JournalComponent, FormsModule],
  template: `
    @if(this.api_key != "" && this.selected_journal() != "") {
      <app-journal [api_key]="api_key" [selected_journal]="selected_journal()" [goBack]="goBack()" />
    } @else {
      <div class="heading">
        <h1>Journal Buddy</h1>
        <p>Ask Gemini questions about your daily journal</p>
      </div>

      <div class="gemini_api_key">
        <label for="api_key">Gemini API key</label>
        <p>Enter your Gemini API key below to use this sample application</p>
        <p class="api_key_help">If you do not have a Gemini API key, you can <a href="https://ai.google.dev/gemini-api/docs/api-key">get one here</a></p>
        <input type="text" name="api_key" [(ngModel)]="api_key" placeholder="API KEY" />
      </div>

      <p class="helper_text">After entering your Gemini API key, select one of the following journal examples:</p>

      <div class="journals">
        <div (click)="select_short_journal()">
          <h2>Short Journal</h2>
          <p>A journal with short entries spanning two weeks, all about creating an AI demo.</p>
        </div>
        <div (click)="select_long_journal()">
          <h2>Long Journal</h2>
          <p>A journal with longer entries about Larry, who is taking an AI algorithms class and is having some trouble.</p>
        </div>
      </div>
  }
  `,
  styles: `
    * {
      font-family: sans-serif;
      max-width: 800px;
    }
    .heading h1 {
      font-size:24px;
      margin:10px;
    }
    .heading p {
      font-size:14px;
      color: #888;
      margin: 10px;
    }
    .helper_text {
      font-size:14px;
      color: #888;
      margin: 10px;
      margin-top:40px;
    }
    .gemini_api_key {
        padding:20px;
        border:1px solid #ccc;
        border-radius: 10px;
        margin: 10px;
        font-size:14px;
    }
    .gemini_api_key label {
        display:block;
        font-weight:bold;
    }
    .gemini_api_key input {
        width: 100%;
        font-size: 14px;
        padding: 2px;
        margin: 5px 0;
    }
    .api_key_help {
      font-size:12px;
      color: #888;
    }
    .journals {
      padding: 40px;
      max-width:500px;
    }
    .journals div {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius:10px;
    }
    .journals div:hover {
      cursor: pointer;
      background: #ddeeff;
      border: 1px solid #0066cc;
    }
    .journals div h2 {
      font-size:18px;
    }
    .journals div p {
      font-size:14px;
      color: #888;
    }
  `
})
export class AppComponent {
  api_key=""
  selected_journal = signal("")

  goBack() {
    return () => {
      this.selected_journal.set("")
    }
  }

  select_short_journal() {
    if(this.api_key != "") {
      this.selected_journal.set("short")    
    }
  }
  select_long_journal() {
    if(this.api_key != "") {
      this.selected_journal.set("long")
    }
  }

}
