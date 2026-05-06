'use client';

import React, { useEffect, useState } from 'react';

const BLOG2_UPVOTE_COUNT_KEY = 'blog-summer-promise-upvotes-count';
const BLOG2_UPVOTE_USER_KEY = 'blog-summer-promise-upvoted';

const BLOG2_BODY_HTML = `
  <p class="blog-meta">Shashank &nbsp;&middot;&nbsp; May 2025 &nbsp;&middot;&nbsp; Personal</p>
  <h1 class="blog-title">I promised myself I wouldn't go home this summer.</h1>
  <p class="blog-subtitle">On chasing internships, getting humbled by silence, and what nobody warns you about the gap between ambition and reality.</p>
  <hr class="divider">

  <p>Hi. Shashank this side.</p>

  <p>If you read my last post, you know I was that student — stuck in a loop, wanting to build something real, not knowing how to start. Well, here's the update. And it's not the kind I wanted to write.</p>

  <p>A few months ago, I made a quiet promise to myself. And to my family. That this summer — my second year summer — I would not be sitting at home. I would have an internship. I would be somewhere, doing something, earning it.</p>

  <p>Simple enough, right? I had a decent CGPA. I had projects. I had drive. What could go wrong?</p>

  <p>Everything, apparently. But let me take you through it properly.</p>

  <h2 class="section-head">The bars I set, and the floor I found</h2>

  <p>I started with what felt like reasonable self-respect. No research internships where I'd just be fetching coffee for a PhD student. No unpaid gigs where I'd be handing over my time in exchange for a "great learning experience." Minimum stipend. Real work. That was the line.</p>

  <p>JPMC had a program. The kind with a high CGPA cap — the kind that filters out most people before they even get a look. I was above the bar. I actually qualified on paper.</p>

  <div class="pull">I filled the form in the last five minutes before the deadline. I remember thinking — "yahan mera toh nahi hoga, toh bharke kya hi hoga." Might as well, right? What's there to lose?</div>

  <p>And then they sent OA links. Just not to me. I found out later that among all the qualifying candidates, they picked randomly. Not the top performers. Not the most interesting profiles. Randomly. I could laugh about it now. At the time, I just sat there staring at my laptop like it had personally betrayed me.</p>

  <p>Okay. Fine. Move on.</p>

  <h2 class="section-head">Two hundred emails a day and a 1% reply rate</h2>

  <p>I pivoted to IIT research labs. Filled forms. Got rejected from every single one without so much as a "thank you for applying." Then I started cold emailing. Not casually — I mean systematically. Two hundred emails a day. Professors. Startup founders. Research labs. Anyone who might need someone who could actually build something.</p>

  <p>1% replied. And of that 1%, most were polite no's or links to their website that I'd already visited. But a few were genuinely interested. One led to an interview — my first real technical interview for an internship. I was nervous in a way that I hadn't been nervous about anything in a long time.</p>

  <p>The feedback they gave me afterwards has lived in my head rent-free since.</p>

  <div class="pull">"The way you're exploring different fields in tech is good. But when you're portraying yourself, you're reading a lesson — not telling a story."</div>

  <p>They were right. And I hated that they were right. I followed up. Multiple times. Still haven't heard back. That silence has its own particular sting — not the silence of rejection, but the silence of maybe, still pending, still possible, probably not.</p>

  <h2 class="section-head">The promise getting heavier by the week</h2>

  <p>Exams were coming. And with them, this dread that had started quietly in the background and was now very loud. Most of my friends — the ones in core branches — had already locked in PSU internships months ago. They had processes. They had pipelines. They had offers. I had 200 unanswered emails and a Google Sheet tracking my follow-up cadence like a small, sad CRM.</p>

  <p>I lowered my bar again. IITs, NITs, DTU — cold emailing professors at those too. Startups. Early-stage companies. I told myself I'd do unpaid if it came to that. I told myself I'd pay for my own accommodation, my own travel, everything — just to be somewhere. Doing something. Not home.</p>

  <p>The internship season has a cruel geography to it. Most things start the first week of May. And if you don't have something locked before exams, you enter this weird no-man's-land where you're studying for papers while simultaneously checking your inbox every twenty minutes for something that isn't coming.</p>

  <p>That's where I was. That's where I still am, honestly, as I write this.</p>

  <h2 class="section-head">The people who said they'd help</h2>

  <p>There's a particular kind of hurt I haven't really talked about publicly, but I'm going to now because I think it's more common than anyone admits.</p>

  <p>Some people — seniors, acquaintances, people who said the things people say — had told me not to worry. "Intern woh toh dila dunga, tension mat le, meri company mein hi kar lena." You know the lines. You've probably heard them too.</p>

  <p>When I finally needed to hold them to those words, the calls stopped getting picked up. The messages got left on read. One situation even ended in a financial loss I'm not going to detail here, but which I definitely shouldn't have had to deal with on top of everything else.</p>

  <p>I don't say this with bitterness. I say it because I think we need to stop pretending this doesn't happen. It does. Constantly. To students everywhere, every season.</p>

  <div class="pull">There is a specific loneliness in being let down by the people you thought were in your corner. It doesn't feel dramatic. It just feels quietly terrible.</div>

  <h2 class="section-head">Tomorrow is my exam and I haven't studied</h2>

  <p>I'm writing this the night before an exam. That probably tells you where my head is at right now. Everything I just wrote has been sitting in my chest for weeks, and I needed somewhere to put it before I could think about anything else.</p>

  <p>I don't have a neat ending for this. I don't have the internship yet. I don't have the resolution. I'm just a second-year student who made a promise to himself and is watching the calendar with something between hope and dread.</p>

  <p>But here's what I do know: I'm not the only one in this. If you're reading this and you're in the same loop — the cold emails, the silence, the friends who got placed through college processes while you're out here refreshing LinkedIn — you are not behind. You're not less. You're just in a part of the story that doesn't have a highlight reel yet.</p>

  <p>And if you're from a hiring team and somehow ended up here — my inbox is genuinely open. No performing. No "reading a lesson." Just someone who wants to build something real, with people who are building something real.</p>

  <p>If you're a student who's been through this — or still going through it — tell me your story. Maybe we figure something out together. Maybe we just talk about it. Either one feels like enough right now.</p>

  <p>The story doesn't have an end yet. I'll write the next part when it does.</p>

  <hr class="divider">

  <div class="cta-block">
    <p><strong>If you're hiring or know someone who is</strong> — Shashank is a second-year CS student at RGIPT with a 9.02 CGPA, full-stack + AI/ML background, and some real things shipped. <a href="mailto:bindalshashank.89@gmail.com" class="cta-link">bindalshashank.89@gmail.com</a></p>
    <p><strong>If you're a student in the same boat</strong> — drop a comment or reach out. Let's figure it out together.</p>
  </div>

  <p class="byline">Shashank is a second-year student at RGIPT. He's been cold emailing since February, still hasn't given up, and is writing this the night before his exam.</p>
`;

export default function Blog2Post() {
  const [upvotes, setUpvotes] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  useEffect(() => {
    const savedCount = Number(localStorage.getItem(BLOG2_UPVOTE_COUNT_KEY) ?? '0');
    const didUpvote = localStorage.getItem(BLOG2_UPVOTE_USER_KEY) === 'true';
    if (!Number.isNaN(savedCount) && savedCount >= 0) setUpvotes(savedCount);
    setHasUpvoted(didUpvote);
  }, []);

  const handleUpvote = () => {
    if (hasUpvoted) return;
    const next = upvotes + 1;
    setUpvotes(next);
    setHasUpvoted(true);
    localStorage.setItem(BLOG2_UPVOTE_COUNT_KEY, String(next));
    localStorage.setItem(BLOG2_UPVOTE_USER_KEY, 'true');
  };

  return (
    <section id="blog-article-2" className="pt-24 md:pt-28 pb-14 md:pb-20 px-4 sm:px-6" aria-label="Blog article: The Summer I Promised Myself">
      <div className="blog-wrap">
        <div dangerouslySetInnerHTML={{ __html: BLOG2_BODY_HTML }} />

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
        .blog-wrap :global(.cta-block) {
          background: var(--bg-secondary);
          border: 0.5px solid var(--border-hover);
          border-radius: 12px;
          padding: 1.4rem 1.6rem;
          margin: 2rem 0;
          font-family: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 13px;
          line-height: 1.7;
        }
        .blog-wrap :global(.cta-block p) {
          font-family: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 13px;
          color: var(--fg-muted);
          margin-bottom: 0.8rem;
        }
        .blog-wrap :global(.cta-block strong) {
          color: var(--fg);
        }
        .blog-wrap :global(.cta-link) {
          color: var(--fg);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .upvote-row {
          max-width: 680px;
          margin: 0 auto;
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
