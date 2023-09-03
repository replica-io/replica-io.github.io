---
title: The Story Behind Replica_IO
description: The Story Behind Replica_IO - an open-source framework for building practical distributed replication mechanisms.
authors: sergefdrv
tags: ["introduction", "announcement", "story"]
---

This post tells how the Replica_IO project originated and explains the
motivation behind it.

<!--truncate-->

## My Background

I'd like to start by tell you a bit about my professional background.
I'm a research engineer with quite some experience in software
engineering. I began working as a software engineer back in 2009.

First 7 years, I was mostly focused on developing low-level system
software: I worked with such things as Linux kernel, microcontrollers,
hardware emulation, and trusted execution. Back then, I particularly
enjoyed contributing to [Qemu](http://qemu.org/), a generic and
open-source machine emulator and virtualizer. My contribution included
enhancing emulation of the ARM platform and enabling multithreading
support in the generic binary translation engine

In 2016, I took a big leap and came into research and development in
the areas of blockchain, distributed and decentralized systems. Soon
enough, I became absolutely excited about this, and since then, I keep
expanding my knowledge and experience in that area, in particular,
designing and implementing distributed protocols. During that period,
apart from proprietary stuff, I worked on the following open-source
projects:

 - [MinBFT Hyperledger Lab][minbft] — an implementation of the MinBFT
   consensus protocol as a pluggable component. I was the main author,
   contributor, and maintainer of the project.
 - [Mir][mir] — a framework for implementing, debugging, and analyzing
   distributed protocols. My main contribution was implementation of
   the checkpointing mechanism, protocol garbage collection, and
   reproducible testing with simulated time.
 - [Interplanetary Consensus (IPC)][ipc] — a framework to enable
   on-demand horizontal scalability of the Filecoin blockchain. My
   main contribution was redesign and implementation of the atomic
   cross-chain transaction execution protocol in Rust.

[minbft]: http://github.com/hyperledger-labs/minbft
[mir]: http://github.com/filecoin-project/mir
[ipc]: http://fil.space/#components

## Implementing Distributed Protocols

So much was I excited about distributed systems, but, after a while, I
started feeling like there's something fundamentally wrong in how we
usually design and implement them.

Distributed protocols are notoriously complex, and it took academia
significant effort to develop a solid theoretical foundation for them.
Due to inherent concurrency, the reasoning about distributed systems
is quite tricky, and there are lots of pitfalls where one gets trapped
pretty quickly, unless being extremely careful. Though, I find this
really fascinating because I particularly love digging deep and
thinking thoroughly.

However, the way distributed protocols are conventionally described on
paper makes it hardly possible to implement them correctly with
confidence; it's simply too far from the realities of software
engineering. Not only academic papers often neglect some details of
practical importance but also the language and notation used there,
they require nontrivial translation to the languages and patterns
commonly used in programming. Add there typical issues that come up
inevitably when programming concurrent systems, time pressure, and we
end up with a great mess that one can hardly comprehend and maintain.

Moreover, it seems like those engineers who get their hands dirty and
implement distributed protocols for practical use tend to jump in and
try applying whatever approach they were used to or that was implied
by the surrounding system. Although one can certainly learn a lot from
such experiments (and I'm doing that), it's generally waste of efforts
when one simply needs to get the thing reliably working. More than
that, since this kind of code is quite hard to get right, inevitable
mistakes creep into such implementations and lurk there unnoticed.
Even when some of those mistakes get revealed, individual projects are
usually too busy and too specific to keep following and effectively
learning from each other.

Having implemented a couple of distributed protocols myself, I find
this status quo deeply unsatisfactory, especially when it comes to
distributed replication mechanisms such as consensus protocols. After
all, they are supposed to ensure consistency and availability in such
critical computing systems as distributed coordination services,
distributed databases, and blockchain. There is an opinion that the
main obstacle to wider adoption of distributed, decentralized systems,
particularly those capable of tolerating arbitrary (Byzantine) faults,
is their requirement for additional resources and reduced performance.
While it's certainly true that high reliability doesn't come for free,
I think the concerns regarding complexity do actually matter a lot in
the end; it's simply hard to get it right.

I think decentralized Byzantine-fault tolerant mechanisms should
prevail in future computing systems and we can do a much better job
working towards that. I believe such complex problems can have neat
solutions, not only efficient, but also easy to use. Clearly,
discovering and developing such solutions does take quite some effort.
There must have been attempts to solve this problem, apparently not
very successful. But since I like to think of myself as someone
discovering smart solutions to hard problems, I'm not too scared; I'm
stubborn enough 😄

## Replica_IO

So I was thinking about this for years, but never managed to find room
for seriously working on it. Suddenly, in February 2023, I was
affected by a lay-off in [Protocol Labs][protocol-labs] and had to
leave; by that time, I had worked with the company as a long-term
collaborator, a Research Engineer at the [ConsensusLab][consensuslab]
group, for almost a year. After a while, I realized that this is
actually a great chance to finally start working on what I was
dreaming of.

[protocol-labs]: https://protocol.ai/
[consensuslab]: https://research.protocol.ai/groups/consensuslab/

Initially, I thought I would just take a break and spend some time on
a hobby project. I already had a name for it — Replica_IO, which had
come to my mind a few months before, as I had been yet again thinking
about communication between replicas in a distributed replication
system. However, once I started asking myself about my real intention
behind this, I realized that it's much bigger than just playing with a
pet project: what I really want is to make a breakthrough in how
distributed systems are designed and implemented!

In March 2023, I decided to found the Replica_IO project and work on
it full time as an independent research engineer. Since I believe in
open source, open innovation and collaboration, I also wanted to make
it radically open and started developing it entirely in the open from
day one. I [described][issue-2] the project's purpose, goals, and
approach, [created][issue-3] its logo, [defined][issue-1] the initial
roadmap, and started working on the [first milestone][milestone-1].

[issue-2]: https://github.com/replica-io/replica-io/issues/2
[issue-3]: https://github.com/replica-io/replica-io/issues/3
[issue-1]: https://github.com/replica-io/replica-io/issues/1
[milestone-1]: https://github.com/replica-io/replica-io/milestone/1

At the time of this writing, I'm [exploring][issue-7] some relevant
state of the art, [summarizing][wiki-state-of-the-art] the findings.
Approaching this in a systematic way lets me dive deeper into the
problem, form a more educated opinion, find some inspiration, and
ultimately come up with effective ideas for achieving the project's
key technical objectives.

[issue-7]: https://github.com/replica-io/replica-io/issues/7
[wiki-state-of-the-art]: https://github.com/replica-io/replica-io/wiki/State-of-the-art-exploration

I understand how ambitious the goals of this project are and that it
may take long time to get there, but I'm absolutely sure it is worth
the effort. I'm surprised how much attention the project has already
attracted and would like to see great experts from the relevant fields
become involved and help to make it real. I also count on getting enough
support for this initiative, and I'm grateful to those who have
already been helping 🙏

If you'd like to learn more about this project, please visit the
[About](/about) page and watch [this talk](https://youtu.be/oJlryr6bMCo).
