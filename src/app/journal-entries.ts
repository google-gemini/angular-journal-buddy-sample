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

import { Injectable } from "@angular/core"

@Injectable({providedIn: "root"})

export class JournalEntries {

    getEntries(selected_journal: string) {
        if(selected_journal == "short") {
            return this.short_entries
        } 
        if(selected_journal == "long") {
            return this.long_entries
        }
        return this.blank_entries
    }

    private blank_entries = [
        {
            "date": " ",
            "entry": " ",
        },
    ]

    private short_entries = [
        {
            "date": "2024-04-01",
            "entry": "This AI project is way over my head. I barely understand the terms they're throwing around in meetings. \"Algorithms,\" \"datasets,\" what does it all mean?  But honestly, that's part of the thrill. Starting from scratch with something so complex is a total rush!",
        },
        { 
            "date": "2024-04-02",
            "entry": "Okay, the tutorials are brutal. This Python stuff is gibberish to me. My head's spinning with loops, variables, and… what the heck is a function? Time to hit up YouTube and pray for a beginner-friendly savior.",
        },
        {
            "date": "2024-04-03",
            "entry": "Minor breakthrough! I wrote my first \"Hello World!\" program, and it actually worked. Small victory, but it feels monumental. I just have to keep reminding myself - baby steps, Kevin, baby steps.",
        },
        {
            "date": "2024-04-04",
            "entry": "I'm officially in the \"imposter syndrome\" zone.  Everyone else on the team seems light years ahead.  Do they even notice how lost I am? I'd ask for help, but I don't want to seem incompetent.",
        },
        { 
            "date": "2024-04-05",
            "entry": "I'm asking for help. Turns out, Sarah from the dev team is an absolute Python wizard.  She explained things way more clearly than the tutorials.  I guess a little vulnerability never hurt anyone.",
        },
        {
            "date": "2024-04-06",
            "entry": "The AI model I'm working on just spat out a bunch of nonsense. Hours wasted, and I have no idea why. I could just throw my laptop out the window right about now.",
        },
        {
            "date": "2024-04-07",
            "entry": "Bug hunting is the worst. Spent all day staring at code, only to find it was a single misplaced semicolon wreaking havoc. Note to self: Caffeine and meticulous proofreading are your friends.",
        },
        { 
            "date": "2024-04-08",
            "entry": "The dataset is a mess!  Missing values, weird formatting... this cleanup's going to take forever. Didn't they have an intern for this?  At least I get why data scientists always complain now.",
        },
        {
            "date": "2024-04-09",
            "entry": "Collaboration is key, who knew?  Worked with Emily to brainstorm new features. Her design ideas sparked something. Maybe this project isn't just about code after all.",
        },
        {
            "date": "2024-04-10",
            "entry": "Frustrated. Spent the whole day tweaking the model, and the results got worse! I'm starting to think this AI is smarter than me and it's purposely sabotaging my work.",
        },
        {
            "date": "2024-04-11",
            "entry": "I'm seeing the matrix. No, seriously, the code suddenly makes a twisted kind of sense. Could this be what they mean about getting into the 'flow'?",
        },
        { 
            "date": "2024-04-12",
            "entry": "Sarah called my work 'elegant'. ELEGANT! Never thought I'd hear that associated with my code. Suddenly, all the late nights and frustration seem worth it.",
        },
        {
            "date": "2024-04-13",
            "entry": "Demo day's looming. Mostly working, but there's some weird edge-case behavior I can't seem to fix. I hope it doesn't blow up in front of the bosses.",
        },
        { 
            "date": "2024-04-14",
            "entry": "Demo went...amazing! The weird edge case never showed up. The higher-ups loved it, and the team genuinely seems impressed. Turns out, this clueless newbie did something right after all!",
        }
    ].reverse()

    private long_entries = [
        {
          "date": "2024-04-15",
          "entry": "This AI algorithms course is no joke. Professor Evans really knows his stuff, and I'm starting to see how the stuff we're learning can have real-world applications.  Had a breakthrough moment this afternoon during my coding session. I finally figured out a way to optimize the search functionality for this project – it's clunky now, but I can tell it's the right direction. Grabbed a burrito with the softball crew after practice. Good to blow off some steam after being hunched over my laptop all day."
        },
        {
          "date": "2024-04-20",
          "entry": "Been up way too late two nights in a row. But I'm on a roll with this project – the idea is starting to take shape. It's got potential, I can feel it.  There are still tons of optimizations to be made, but I think this might actually be something... something real. Talked to Mom on the phone today. She always asks about my classes, but I was hesitant to tell her about this project thing.  She gets worried when I get all obsessed over something new."
        },
        {
          "date": "2024-04-29",
          "entry": "Demoed the project to a couple of my classmates today. They were impressed – way more so than I expected. They pointed out some stuff I hadn't even thought of before, and I jotted down a bunch of notes for changes. I'm buzzing with ideas now. This thing could actually be a tool people want to use.  Maybe, just maybe... there's a business side to this."
        },
        {
          "date": "2024-05-08",
          "entry": "Spent all afternoon at the whiteboard working out the architecture for a possible backend system. This whole project is getting way complex, but it's the good kind of complex.  If I can pull everything together, this is going to be way bigger than just an assignment for Professor Evans. Dad texted me a video of my little brother's baseball game. It's crazy how fast he's growing up. Makes me miss home, but I know they're supportive, even if they don't get all this tech stuff."
        },
        {
          "date": "2024-05-12",
          "entry": "Frustrating day.  My code's a mess. The more I try to refine one thing, the more tangled it gets with everything else.  I'm starting to worry about the deadline for the project submission.  Maybe I was too ambitious? But if I can just crack this next bit, I know I'll be on to something big. Had pizza with Jess and her roommate after class.  They always manage to cheer me up even when I'm all stressed out."
        },
        {
          "date": "2024-05-17",
          "entry": "Hit a major snag today.  There's this weird latency issue that I cannot figure out. My algorithm should be lightning fast, yet it keeps freezing for a few seconds – enough to make the whole thing feel janky.  I've been scouring online forums, trying different libraries, refactoring… nothing's working. I'm starting to doubt whether I can fix this in time for the project presentation.  Missed the softball game tonight.  The guys were pretty disappointed, and I feel bad, but I can't seem to focus on anything else right now."
        },
        {
          "date": "2024-05-20",
          "entry": "Eureka moment!  After hours of pulling my hair out, I finally figured out that stupid latency problem. It was a conflict with a third-party library I was using.  Switched it out, and now the whole thing is blazing fast.  Feeling like a coding ninja – this sense of accomplishment is addictive. I'm starting to research what it takes to build a proper web app around this.  Domain names, cloud servers, the whole nine yards. It's a lot more complicated than I realized, but there's a ton of good info out there."
        },
        {
          "date": "2024-05-25",
          "entry": "Talked to Professor Evans after class today.  I hesitated for a bit but decided to pitch him my project – not just the class assignment, but the bigger idea.  I was nervous as hell, but he was surprisingly receptive. He gave me some great pointers for potential directions and even some industry contacts to check out.  This feels surreal.  Maybe, just maybe, this isn't just a crazy college project."
        },
        {
          "date": "2024-05-27",
          "entry": "The project presentation went incredibly well.  Nailed the demo, fielded the questions like a pro, and even got a few classmates asking if they could try the tool for themselves.  The buzz is real! It's exhilarating but also overwhelming.  On the one hand, I want to keep iterating, building, and turning this into something bigger.  On the other hand, finals are coming up, and I haven't started studying for any of my other classes. I need to figure out how to balance everything."
        },
        {
          "date": "2024-06-01",
          "entry": "I've been so absorbed in this project that the real world has been slipping by.  Suddenly, it's the last week of the semester. I promised myself I'd visit my family back East after finals, but now I'm second-guessing everything.  Every waking moment, my mind is racing with potential features, partnerships, and ways to make this project succeed. I feel guilty about ditching my family, but I can't turn my back on this now. It's like this thing has a life of its own.  Maybe I'll talk to Mom about it on the phone tonight."
        },
        {
          "date": "2024-06-06",
          "entry": "Summer's here, and campus feels like a ghost town. It's just me and a few other students who stuck around.  I've set up camp in the computer lab, living off caffeine and takeout. Professor Evans put me in touch with someone at the university's incubator program.   Apparently, they help students turn projects into startups.  The meeting is next week – feels like a huge step, but I'm going to wing it and see where it leads."
      },
      {
          "date": "2024-06-11",
          "entry": "The incubator meeting did not go as planned. They were impressed with my project's potential but said it was too early stage. I need market validation, a fleshed-out business plan, all sorts of things I didn't even know existed. It was a bit of a reality check.  Guess I thought this would be easier.  But I won't be deterred. They gave me good resources, so at least I have direction."
      },
      {
          "date": "2024-06-18",
          "entry": "I'm back home for a few weeks. It's good to be around family, even if I spend most of the time holed up in my old room working.  My parents are cautiously supportive. Mom keeps asking all these 'practical' questions – how will I make money? When will I get a 'real' job?  I know she means well, but it makes me doubt myself sometimes. Dad seems to get it more. He just reminds me not to burn out."
      },
      {
          "date": "2024-06-22",
          "entry": "Market research is more brutal than I anticipated. I'm spending hours sending out surveys, cold calling potential users, and trying to parse through all the feedback. The results are mixed so far.  Some people see the potential, but others are completely unimpressed.  I don't know whether I should feel encouraged or deflate. This whole startup thing is such a rollercoaster."
      },
      {
          "date": "2024-06-30",
          "entry": "Had a long video call with Jess today. It was so good to catch up with a friend who actually understands what I'm going through.  She's always been my biggest cheerleader.  I haven't told many people about this 'startup' idea – it seems safer to keep it under wraps until it's something substantial. But Jess is excited for me, which honestly feels good after weeks of feeling a bit isolated."
      },
      {
          "date": "2024-07-05",
          "entry": "Major breakthrough with the market research! I started looking at a more niche group of potential users, and the feedback is way more positive. It's not a huge market, but it's a starting point.  This changes everything. Time to refine my pitch and strategy."
      },
      {
          "date": "2024-07-12",
          "entry": "Sleep has become a luxury I can't really afford. I'm juggling coding, pitching, networking – it's a nonstop hustle. Sometimes I wonder if I went completely insane. Yet, I've never felt more determined. When I hit a wall, I remind myself that all my favorite startups started with just an idea, just like mine. "
      },
      {
          "date": "2024-07-19",
          "entry": "Landed my first paying customer today! It's a small company, and the deal isn't massive, but it's validation. Proof that someone is willing to pay for what I've built.  This feeling is unbeatable.  Sent a text to Professor Evans to let him know – wouldn't be here without him."
      },
      {
          "date": "2024-07-26",
          "entry": "Found out a big competitor is working on something eerily similar to my project. My stomach just sank when I saw their announcement. Am I too late? Did I waste all this time? I need a plan. I don't know what that plan is yet, but I'm not giving up without a fight. This is a marathon, not a sprint, right?"
      },
      {
          "date": "2024-08-02",
          "entry": "The last few weeks have been an emotional blur.  There were nights I thought about scrapping the whole thing. Other days, I'm filled with this stubborn determination to succeed despite the odds. I've started looking into potential investors. It's a whole different world with its own vocabulary and rules. It feels like I need an MBA just to understand what people are talking about. But I'll figure it out, one step at a time."
      }
      ].reverse()

}

