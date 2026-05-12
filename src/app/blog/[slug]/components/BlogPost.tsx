'use client';

import React, { useEffect, useState } from 'react';

const UPVOTE_COUNT_KEY = 'blog-v3-upvotes-count';
const UPVOTE_USER_KEY = 'blog-v3-upvoted';

const BODY_HTML = `
  <p class="blog-meta">Shashank &nbsp;&middot;&nbsp; April 2026 &nbsp;&middot;&nbsp; Personal</p>
  <h1 class="blog-title">The engineering student who got tired of waiting to build something real</h1>
  <p class="blog-subtitle">On the words that stop you, the words that keep you going, and trying to build something people actually use.</p>
  <hr class="divider">

  <p>Hi, I am Shashank. Second year. Engineering student. And for a long time, someone who was building things without knowing why he stopped.</p>

  <p>This post is about that. About what it actually feels like to be a student who wants to build, who has built, and who still ends up paralyzed. About a product I made that nobody used. About two people whose words &mdash; one cruel, one kind &mdash; ended up shaping everything that followed. And about the question I still have not answered: how do you build something people actually need?</p>

  <h2 class="section-head">I was in tech before I knew I was in tech</h2>

  <p>Back in 2021, long before college, I was building Telegram bots. Automated inline chat agents. Deploying things on Heroku and Railway. I had no formal knowledge &mdash; no DSA, no computer science fundamentals &mdash; just YouTube and curiosity. I contributed to open source projects I barely understood. I broke things constantly. And somehow, I built a Telegram community that grew to around 30,000 to 40,000 people.</p>

  <p>I was a teenager with no real friend circle, and suddenly I had a community of real people who showed up because of something I built. That felt like more than money &mdash; it felt like proof. Proof that I could make something that mattered to someone. I earned enough to buy gadgets, travel a little, take care of some needs. But what I was really collecting was validation. The first kind I had ever gotten from building.</p>

  <p>Then came JEE preparation, and I walked away from all of it.</p>

  <h2 class="section-head">The blank years</h2>

  <p>When I got to college, I had already lost the thread. I joined the tech branch but felt like an outsider. There were already groups, already friendships. I did not fit into those either. I was fine at academics but not doing anything beyond that. First semester. Second. Third. Nothing I could point to and say: I built that.</p>

  <p>I told myself it was because I hated the traditional path &mdash; memorizing DSA patterns, grinding LeetCode, learning everything from scratch the "right" way. That was true, actually. But it was also an excuse. The deeper truth was simpler: I did not feel like anyone thought I could do it, so I did not try.</p>

  <div class="pull">
    Real talk about being a student in tech: the hardest part is not the code. It is the feeling that the people around you have already formed their groups, already started their projects, and you are somehow behind in a race you did not know had started.
  </div>

  <p>That is something nobody warns you about. You come in expecting to learn. You do not expect to feel invisible.</p>

  <h2 class="section-head">The senior who made me feel worthless</h2>

  <p>Near the end of third semester, a senior said something to me &mdash; dismissively, casually, the way people do when they do not realise how much weight their words carry &mdash; that made me feel like I was worth nothing. That I was not capable.</p>

  <p>I do not think he meant to break something in me. But he did.</p>

  <p>And then, strangely, it made me move. Not because I wanted to prove him wrong in some cinematic way. More because I was so tired of feeling like he might be right.</p>

  <p>I started with something small: the website for our college fest. I could not even remember how to clone a repo &mdash; things I had done casually in 2021 had just evaporated. I asked seniors. I asked batchmates. I leaned heavily on AI tools to ship something fast. Then the usage limit ran out.</p>

  <p>That was the best thing that could have happened. I had to start reading the code myself. Actually understanding what was happening. Slowly, I moved from someone who used AI to ship, to someone who used AI to learn.</p>

  <h2 class="section-head">Working on something real for the first time</h2>

  <p>A senior was building a startup. I joined to help with frontend. That turned into backend. That turned into full backend with AI integration &mdash; LangGraph, LangChain, the works. The product was QuizerAI. It was the first time I worked on something where the question was not "does this code run" but "does this actually solve a problem for someone."</p>

  <p>That shift in thinking changed everything. Because once you start asking that question, you cannot stop asking it.</p>

  <h2 class="section-head">Why I built Alerty AI</h2>

  <p>The problem I kept running into was forgetting things. Not in a dramatic way. In the quiet, constant way that students do &mdash; a hackathon deadline here, an assignment there, a task someone asked you to do that just evaporates by the next morning.</p>

  <p>There are hundreds of task management apps. I had tried several. They all had the same problem: they assumed I would sit down, open the app, and type things in. But that is not how a student's brain works. By the time you are calm enough to open a task manager, you have already half-forgotten what you needed to log. And if you are like me &mdash; a little lazy, always mid-something &mdash; you just do not do it.</p>

  <div class="pull">
    The insight was not about features. It was about friction. The only task manager a distracted student will actually use is one that costs almost no effort to use.
  </div>

  <p>So I built <span class="product-tag">AlertyAI</span>. The core idea was voice-first: you speak, and it creates the task, sets the time, breaks it into subtasks if needed, and reminds you. No opening an app and typing. Just: "Hey Alerty, remind me to submit the lab report tomorrow at 9." Done.</p>

  <p>Beyond that, it had a home screen widget so your tasks were always visible without opening anything, image-to-task for when you photograph something you need to remember, a team management system with task assignment and performance tracking, and live chat within teams. I was not thinking about any of this as a startup. I was just solving the thing that was bothering me, and then solving the next thing, and the next.</p>

  <p>I got feedback from friends and seniors. I fixed things. I launched it on the Play Store. I even put it on Product Hunt.</p>

  <p>Nobody came.</p>

  <h2 class="section-head">The other person whose words changed things</h2>

  <p>A batchmate of mine &mdash; someone who has been building alongside me, someone who has been pushing me forward on the days I could not push myself &mdash; said something I keep coming back to.</p>

  <p>He said: an app only gets used if people actually need it. If people are not using yours, maybe it is not solving a problem they have. Maybe the market just does not need it yet. Or maybe you have not reached the right people. But you cannot know which one it is if you stop.</p>

  <p>I sat with that for a long time. Part of me heard it as confirmation that I had failed. But the more I thought about it, the more I realised he was not telling me to quit &mdash; he was telling me to keep thinking. To stay in it. To not let the silence from the market be the final answer.</p>

  <p>He is still there. Still building. Still checking in. I have not been doing this alone, even on the days it has felt that way.</p>

  <h2 class="section-head">What nobody tells you about validation</h2>

  <p>Here is what I have learned, slowly and painfully: validation is not a reward for good work. It is a resource. And like any resource, its absence can shut you down just as completely as not having money or time.</p>

  <p>One senior's dismissal almost made me stop entirely. One batchmate's belief kept me going. Neither of them knew how much weight their words were carrying. Most people do not.</p>

  <p>The dangerous thing about needing external validation is not that it makes you weak. It is that it makes your momentum dependent on other people's attention. And other people are busy. They are not going to validate you on schedule. If you stop every time the silence gets loud, you will stop a lot.</p>

  <div class="pull">
    I stopped working on Alerty AI not because it was a bad product. I stopped because nobody told me to keep going. That is the thing I am most honest about now.
  </div>

  <p>The question I am still sitting with &mdash; and I think most student builders sit with this &mdash; is: how do you build something that earns its own users? Not through marketing, not through shouting into the void, but because it solves something so specifically and so well that the people who need it find it and keep coming back.</p>

  <p>I do not have that answer yet. But I am more convinced than ever that the answer is not in a better launch strategy. It is in understanding the problem deeply enough that the product almost explains itself.</p>

  <h2 class="section-head">Where I am now, honestly</h2>

  <p>Exams are in a few weeks. I have not prepared. My head is full of half-built ideas and unfinished thoughts. Some days I feel the guilt of not building. Some days I feel the guilt of not studying. Most days I feel both.</p>

  <p>But I am writing this, which means I am still in it. Still thinking. Still trying to figure out what the next real thing is &mdash; not a project to put on a resume, not a startup pitch, just something that someone will use because it actually helps them.</p>

  <p>If you are a student reading this and you recognise any of this: you are not behind. You are not less than the people who look like they have it figured out. Most of them do not. They are just louder about the parts that worked.</p>

  <p>Keep building. Even when nobody is watching. Especially then.</p>

  <hr class="divider">
  <p class="byline">Shashank is a second-year student and builder at RGIPT. He built AlertyAI, a voice-first smart scheduling app for students and teams, currently available on the Play Store.</p>
`;

export default function BlogPost() {
  const [upvotes, setUpvotes] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  useEffect(() => {
    const savedCount = Number(localStorage.getItem(UPVOTE_COUNT_KEY) ?? '0');
    const didUpvote = localStorage.getItem(UPVOTE_USER_KEY) === 'true';
    if (!Number.isNaN(savedCount) && savedCount >= 0) setUpvotes(savedCount);
    setHasUpvoted(didUpvote);
  }, []);

  const handleUpvote = () => {
    if (hasUpvoted) return;
    const next = upvotes + 1;
    setUpvotes(next);
    setHasUpvoted(true);
    localStorage.setItem(UPVOTE_COUNT_KEY, String(next));
    localStorage.setItem(UPVOTE_USER_KEY, 'true');
  };

  return (
    <section id="blog-article" className="pt-24 md:pt-28 pb-14 md:pb-20 px-4 sm:px-6" aria-label="Blog article">
      <div className="blog-wrap">
        <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />

        <div className="upvote-row">
          <button
            type="button"
            onClick={handleUpvote}
            disabled={hasUpvoted}
            className="upvote-button"
            aria-label={hasUpvoted ? 'Already upvoted' : 'Upvote this article'}
          >
            {hasUpvoted ? `Upvoted (${upvotes})` : `Upvote (${upvotes})`}
          </button>
          <span className="upvote-note">
            {hasUpvoted ? 'You already upvoted from this browser.' : 'One upvote allowed per person on this browser.'}
          </span>
        </div>
      </div>

      <style jsx>{`
        .blog-wrap {
          max-width: 680px;
          margin: 0 auto;
          font-family: 'Lora', Georgia, serif;
          color: var(--fg);
          line-height: 1.88;
          font-size: 19px;
        }
        .blog-wrap :global(.blog-meta) {
          font-family: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--fg-subtle);
          margin-bottom: 1.8rem;
          text-transform: uppercase;
        }
        .blog-wrap :global(.blog-title) {
          font-size: clamp(1.45rem, 4vw, 1.9rem);
          font-weight: 500;
          line-height: 1.3;
          margin: 0 0 0.5rem;
          color: var(--fg);
        }
        .blog-wrap :global(.blog-subtitle) {
          font-style: italic;
          font-size: 18px;
          color: var(--fg-muted);
          margin: 0 0 2rem;
        }
        .blog-wrap :global(.divider) {
          border: none;
          border-top: 0.5px solid var(--border);
          margin: 2rem 0;
        }
        .blog-wrap :global(p) {
          margin: 0 0 1.4rem;
          color: var(--fg-muted);
        }
        .blog-wrap :global(.pull) {
          font-style: italic;
          color: var(--fg);
          border-left: 2px solid var(--border-hover);
          padding-left: 1.2rem;
          margin: 1.8rem 0;
        }
        .blog-wrap :global(.product-tag) {
          display: inline-block;
          font-family: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 12px;
          background: var(--bg-secondary);
          border: 0.5px solid var(--border-hover);
          border-radius: 8px;
          padding: 2px 10px;
          color: var(--fg);
          vertical-align: middle;
        }
        .blog-wrap :global(.section-head) {
          font-size: 28px;
          font-weight: 500;
          margin: 2.5rem 0 1rem;
          color: var(--fg);
        }
        .blog-wrap :global(.byline) {
          font-size: 16px;
          color: var(--fg-subtle);
          font-style: italic;
        }
        .upvote-row {
          margin-top: 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }
        .upvote-button {
          width: fit-content;
          border: 1px solid var(--border-hover);
          border-radius: 999px;
          padding: 0.45rem 0.95rem;
          background: transparent;
          color: var(--fg);
          font-family: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .upvote-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .upvote-note {
          font-family: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          color: var(--fg-subtle);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .blog-wrap {
            font-size: 18px;
            line-height: 1.8;
          }
          .blog-wrap :global(.section-head) {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
}
