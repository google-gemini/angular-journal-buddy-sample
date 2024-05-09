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

import { Component, inject, Input } from '@angular/core';
import { EntryComponent } from './entry.component';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { JournalEntries } from './journal-entries';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [EntryComponent, FormsModule],
  template: `

    <div class="back_button" (click)="goBack()">
     ← Switch Journals
    </div>

    <div class="question_box">
        <div class="error_message" [hidden]="error_message.length == 0">
            {{error_message}}
        </div>
        <label for="question">Ask me anything about your journal</label>
        <input type="text" name="question" [(ngModel)]="question" (keyup)="inputChanged($event)" />
        <button (click)="ask_question()">Ask</button>
        <div class="helper_heading">Feeling stuck?</div>
        <div class="helper_text">Try asking one of these questions:</div>
        <ol class="helper_list">
            <li (click)="ask('What was the highlight of my last week?')">What was the highlight of my last week?</li>
            <li (click)="ask('What were my goals for this month, and have I made progress?')">What were my goals for this month, and have I made progress?</li>
            <li (click)="ask('Can you summarize the overall mood of my journal this month?')">Can you summarize the overall mood of my journal this month?</li>
        </ol>
    </div>

    <div class="loading" [hidden]="!loading">
        Asking your question...
    </div>

    <div class="answer_box" [hidden]="answer.length == 0">
        <h1 [hidden]="!valid_answer">Gemini's answer:</h1>
        @for(answerLine of answer.split("\n");track answerLine) {
            <div>{{answerLine}}</div>
        }
    </div>

    <h1 class="journal_entries_header">Journal Entries:</h1>
    @for(entry of journalEntries.getEntries(this.selected_journal);track entry) {
        <app-entry [entry]="entry" />
    }


`,
  styles: `
    * {
        font-family: sans-serif;
        max-width: 800px;
    }
    .back_button {
        font-size:12px;
        margin: 10px 0 0 20px;
        font-weight: bold;
        padding: 4px 8px;
        background-color: #eee;
        border-radius: 20px;
        display: inline-block;
    }
    .back_button:hover {
        cursor: pointer;
        background-color: #ccc;
    }
    h1.journal_entries_header {
        margin: 20px;
        margin-bottom: 5px;
        font-size: 20px;
    }
    .question_box {
        padding:20px;
        border:1px solid #ccc;
        border-radius: 10px;
        margin: 20px;
    }
    .question_box label {
        display:block;
        font-weight:bold;
        margin-bottom:4px;
    }
    .question_box input {
        width: 100%;
        font-size: 18px;
        padding: 2px;
        margin: 10px 0;
    }
    .question_box button {
        margin-top: 5px;
        background: #0066cc;
        border: 0px;
        border-radius: 4px;
        padding: 4px 10px;
        color: #fff;
    }
    .question_box button:hover {
        background: #4488ff;
        cursor: pointer;
    }

  

    .error_message {
        padding:10px;
        margin-bottom: 10px;
        background:#ff474c;
        border: 1px solid red;
        border-radius: 4px;
        font-size:14px;
        color: white;
    }

    .answer_box {
        padding: 10px;
        margin: 20px;
        border: 1px solid #444;
        border-radius: 10px;
        background: #eee;
    }
    .answer_box h1 {
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 16px;
    }

    .answer_box p {
        margin-bottom:1px;
    }
    .loading {
        text-align: center;
        padding: 10px;
        margin: 20px;
        border: 1px solid #444;
        border-radius: 10px;
        background: #eee;
        color: #444;
        font-weight: bold;
        font-size: 18px;
    }
    .helper_heading {
        margin-top:20px;
        font-size:16px;
        font-weight:bold;
        color:#444;
    }
    .helper_text {
        font-size:14px;
        color:#888;
    }
    .helper_list {
        font-size:14px;
    }
    .helper_list li {
        margin-bottom: 5px;
        color:#555;
        text-decoration: underline;
    }
    .helper_list li:hover {
        cursor: pointer;
        color: blue;
        text-decoration: underline;
    }
`
})
export class JournalComponent {

    @Input() api_key = ""
    @Input() selected_journal = ""
    @Input() goBack = () => {

    }
    
    journalEntries = inject(JournalEntries)

    question = ""
    answer = ""
    valid_answer = false
    error_message = ""
    loading = false
    
    inputChanged(e: KeyboardEvent) {
        if(e.key == "Enter") {
            this.ask_question()
        }
        if(this.question != "") {
            this.error_message = ""
        }
    }

    async ask_question() {
        if(this.question == "") {
            this.error_message = "Please enter a question to ask Gemini about your journal"
            return
        }
        await this.ask(this.question)
    }

    async ask(question_to_ask: string) {
        this.question = question_to_ask

        if(this.api_key.length == 0) {
            this.error_message = "Please enter an API KEY for Gemini first."
            return
        }

        this.loading = true

        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US');
        
        let prompt = `This is today's date: ${formattedDate}. I'm passing you a list of journal entries at the end of this prompt. Here is a question the author just asked about all of the entries: ${question_to_ask}. Please pay attention to dates. The author might have said something like 'what did I do last month?'. Please use the current date I provided, and use the dates on each entry to look at the correct ones. Please answer the author's question. Be brief. If they ask about 1 entrey, 2-3 sentences is ok. If they ask about 2-3 entries, 1 sentence each, or a 3-5 sentence summary is ok. If they ask about more entires, just do 1-2 sentences each, like a bulleted list. Please try your best to answer the author's question. Here are the entries:\n`;

        for(let entry of this.journalEntries.getEntries(this.selected_journal)) {
            prompt += `${entry.date}\n${entry.entry}\n\n`
        }
        const geminiOutput = await this.callGemini(prompt)

        this.loading = false

        if(geminiOutput == "-1") {
            // Error with gemini output
            this.answer = "I cannot answer that question, please ask it in a different way."
            this.valid_answer = false
        } else if(geminiOutput == "-2") {
            this.answer = "API key is invalid. Please go back and enter a valid API key."
            this.valid_answer = false
        } else {
            this.answer = geminiOutput
            this.valid_answer = true
        }

    }

    async callGemini(prompt: string) {
        const genAI = new GoogleGenerativeAI(this.api_key);

        const model = genAI.getGenerativeModel({
          model: 'gemini-pro'
        });
            
        try {
          const result = await model.generateContent(prompt);
          const response = await result.response;
          const text = response.text();
          return text
        } catch(e: any) {
            if(e.message.toLowerCase().includes("api key")) {
                return "-2"
            } else {
                return "-1"
            }
        }
    }


}
