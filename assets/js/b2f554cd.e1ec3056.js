"use strict";(self.webpackChunkreplica_io=self.webpackChunkreplica_io||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/09/04/the-story-behind-replica_io","metadata":{"permalink":"/blog/2023/09/04/the-story-behind-replica_io","editUrl":"https://github.com/replica-io/replica-io.github.io/edit/main/blog/2023-09-04-the-story-behind-replica_io.md","source":"@site/blog/2023-09-04-the-story-behind-replica_io.md","title":"The Story Behind Replica_IO","description":"The Story Behind Replica_IO - an open-source framework for building practical distributed replication mechanisms.","date":"2023-09-04T00:00:00.000Z","formattedDate":"September 4, 2023","tags":[{"label":"introduction","permalink":"/blog/tags/introduction"},{"label":"announcement","permalink":"/blog/tags/announcement"},{"label":"story","permalink":"/blog/tags/story"}],"readingTime":5.96,"hasTruncateMarker":true,"authors":[{"name":"Sergey Fedorov","title":"Founder","email":"sergefdrv@replica-io.dev","url":"https://github.com/sergefdrv","imageURL":"https://github.com/sergefdrv.png","key":"sergefdrv"}],"frontMatter":{"title":"The Story Behind Replica_IO","description":"The Story Behind Replica_IO - an open-source framework for building practical distributed replication mechanisms.","authors":"sergefdrv","tags":["introduction","announcement","story"]}},"content":"This post tells how the Replica_IO project originated and explains the\\nmotivation behind it.\\n\\n\x3c!--truncate--\x3e\\n\\n## My Background\\n\\nI\'d like to start by tell you a bit about my professional background.\\nI\'m a research engineer with quite some experience in software\\nengineering. I began working as a software engineer back in 2009.\\n\\nFirst 7 years, I was mostly focused on developing low-level system\\nsoftware: I worked with such things as Linux kernel, microcontrollers,\\nhardware emulation, and trusted execution. Back then, I particularly\\nenjoyed contributing to [Qemu](http://qemu.org/), a generic and\\nopen-source machine emulator and virtualizer. My contribution included\\nenhancing emulation of the ARM platform and enabling multithreading\\nsupport in the generic binary translation engine\\n\\nIn 2016, I took a big leap and came into research and development in\\nthe areas of blockchain, distributed and decentralized systems. Soon\\nenough, I became absolutely excited about this, and since then, I keep\\nexpanding my knowledge and experience in that area, in particular,\\ndesigning and implementing distributed protocols. During that period,\\napart from proprietary stuff, I worked on the following open-source\\nprojects:\\n\\n - [MinBFT Hyperledger Lab][minbft] \u2014 an implementation of the MinBFT\\n   consensus protocol as a pluggable component. I was the main author,\\n   contributor, and maintainer of the project.\\n - [Mir][mir] \u2014 a framework for implementing, debugging, and analyzing\\n   distributed protocols. My main contribution was implementation of\\n   the checkpointing mechanism, protocol garbage collection, and\\n   reproducible testing with simulated time.\\n - [Interplanetary Consensus (IPC)][ipc] \u2014 a framework to enable\\n   on-demand horizontal scalability of the Filecoin blockchain. My\\n   main contribution was redesign and implementation of the atomic\\n   cross-chain transaction execution protocol in Rust.\\n\\n[minbft]: http://github.com/hyperledger-labs/minbft\\n[mir]: http://github.com/filecoin-project/mir\\n[ipc]: http://fil.space/#components\\n\\n## Implementing Distributed Protocols\\n\\nSo much was I excited about distributed systems, but, after a while, I\\nstarted feeling like there\'s something fundamentally wrong in how we\\nusually design and implement them.\\n\\nDistributed protocols are notoriously complex, and it took academia\\nsignificant effort to develop a solid theoretical foundation for them.\\nDue to inherent concurrency, the reasoning about distributed systems\\nis quite tricky, and there are lots of pitfalls where one gets trapped\\npretty quickly, unless being extremely careful. Though, I find this\\nreally fascinating because I particularly love digging deep and\\nthinking thoroughly.\\n\\nHowever, the way distributed protocols are conventionally described on\\npaper makes it hardly possible to implement them correctly with\\nconfidence; it\'s simply too far from the realities of software\\nengineering. Not only academic papers often neglect some details of\\npractical importance but also the language and notation used there,\\nthey require nontrivial translation to the languages and patterns\\ncommonly used in programming. Add there typical issues that come up\\ninevitably when programming concurrent systems, time pressure, and we\\nend up with a great mess that one can hardly comprehend and maintain.\\n\\nMoreover, it seems like those engineers who get their hands dirty and\\nimplement distributed protocols for practical use tend to jump in and\\ntry applying whatever approach they were used to or that was implied\\nby the surrounding system. Although one can certainly learn a lot from\\nsuch experiments (and I\'m doing that), it\'s generally waste of efforts\\nwhen one simply needs to get the thing reliably working. More than\\nthat, since this kind of code is quite hard to get right, inevitable\\nmistakes creep into such implementations and lurk there unnoticed.\\nEven when some of those mistakes get revealed, individual projects are\\nusually too busy and too specific to keep following and effectively\\nlearning from each other.\\n\\nHaving implemented a couple of distributed protocols myself, I find\\nthis status quo deeply unsatisfactory, especially when it comes to\\ndistributed replication mechanisms such as consensus protocols. After\\nall, they are supposed to ensure consistency and availability in such\\ncritical computing systems as distributed coordination services,\\ndistributed databases, and blockchain. There is an opinion that the\\nmain obstacle to wider adoption of distributed, decentralized systems,\\nparticularly those capable of tolerating arbitrary (Byzantine) faults,\\nis their requirement for additional resources and reduced performance.\\nWhile it\'s certainly true that high reliability doesn\'t come for free,\\nI think the concerns regarding complexity do actually matter a lot in\\nthe end; it\'s simply hard to get it right.\\n\\nI think decentralized Byzantine-fault tolerant mechanisms should\\nprevail in future computing systems and we can do a much better job\\nworking towards that. I believe such complex problems can have neat\\nsolutions, not only efficient, but also easy to use. Clearly,\\ndiscovering and developing such solutions does take quite some effort.\\nThere must have been attempts to solve this problem, apparently not\\nvery successful. But since I like to think of myself as someone\\ndiscovering smart solutions to hard problems, I\'m not too scared; I\'m\\nstubborn enough \ud83d\ude04\\n\\n## Replica_IO\\n\\nSo I was thinking about this for years, but never managed to find room\\nfor seriously working on it. Suddenly, in February 2023, I was\\naffected by a lay-off in [Protocol Labs][protocol-labs] and had to\\nleave; by that time, I had worked with the company as a long-term\\ncollaborator, a Research Engineer at the [ConsensusLab][consensuslab]\\ngroup, for almost a year. After a while, I realized that this is\\nactually a great chance to finally start working on what I was\\ndreaming of.\\n\\n[protocol-labs]: https://protocol.ai/\\n[consensuslab]: https://research.protocol.ai/groups/consensuslab/\\n\\nInitially, I thought I would just take a break and spend some time on\\na hobby project. I already had a name for it \u2014 Replica_IO, which had\\ncome to my mind a few months before, as I had been yet again thinking\\nabout communication between replicas in a distributed replication\\nsystem. However, once I started asking myself about my real intention\\nbehind this, I realized that it\'s much bigger than just playing with a\\npet project: what I really want is to make a breakthrough in how\\ndistributed systems are designed and implemented!\\n\\nIn March 2023, I decided to found the Replica_IO project and work on\\nit full time as an independent research engineer. Since I believe in\\nopen source, open innovation and collaboration, I also wanted to make\\nit radically open and started developing it entirely in the open from\\nday one. I [described][issue-2] the project\'s purpose, goals, and\\napproach, [created][issue-3] its logo, [defined][issue-1] the initial\\nroadmap, and started working on the [first milestone][milestone-1].\\n\\n[issue-2]: https://github.com/replica-io/replica-io/issues/2\\n[issue-3]: https://github.com/replica-io/replica-io/issues/3\\n[issue-1]: https://github.com/replica-io/replica-io/issues/1\\n[milestone-1]: https://github.com/replica-io/replica-io/milestone/1\\n\\nAt the time of this writing, I\'m [exploring][issue-7] some relevant\\nstate of the art, [summarizing][wiki-state-of-the-art] the findings.\\nApproaching this in a systematic way lets me dive deeper into the\\nproblem, form a more educated opinion, find some inspiration, and\\nultimately come up with effective ideas for achieving the project\'s\\nkey technical objectives.\\n\\n[issue-7]: https://github.com/replica-io/replica-io/issues/7\\n[wiki-state-of-the-art]: https://github.com/replica-io/replica-io/wiki/State-of-the-art-exploration\\n\\nI understand how ambitious the goals of this project are and that it\\nmay take long time to get there, but I\'m absolutely sure it is worth\\nthe effort. I\'m surprised how much attention the project has already\\nattracted and would like to see great experts from the relevant fields\\nbecome involved and help to make it real. I also count on getting enough\\nsupport for this initiative, and I\'m grateful to those who have\\nalready been helping \ud83d\ude4f\\n\\nIf you\'d like to learn more about this project, please visit the\\n[About](/about) page and watch [this talk](https://youtu.be/oJlryr6bMCo)."}]}')}}]);