import { Article, Category } from '../types';
import { allArticles } from './newArticles';
import { sportsArticles } from './sportsArticles';
import { trendingArticle } from './trendingArticle';

export const categories: Category[] = [
  { id: '1', name: 'Politics', slug: 'politics', color: 'bg-red-500' },
  { id: '2', name: 'Business', slug: 'business', color: 'bg-green-500' },
  { id: '3', name: 'Entertainment', slug: 'entertainment', color: 'bg-purple-500' },
  { id: '4', name: 'Sports', slug: 'sports', color: 'bg-blue-500' },
  { id: '5', name: 'Technology', slug: 'technology', color: 'bg-indigo-500' },
  { id: '6', name: 'Health', slug: 'health', color: 'bg-pink-500' },
  { id: '7', name: 'World News', slug: 'world-news', color: 'bg-orange-500' },
  { id: '8', name: 'Science', slug: 'science', color: 'bg-teal-500' },
];

// Original articles with updated URLs and SEO enhancements
export const originalArticles: Article[] = [
  {
    id: '1',
    title: 'Global Economic Summit Addresses Climate Change and Trade Relations',
    slug: 'global-economic-summit-climate-change-trade-relations',
    summary: 'World leaders gather to discuss unprecedented cooperation on climate initiatives while navigating complex trade negotiations.',
    content: `In a landmark gathering that brings together over 50 world leaders, the Global Economic Summit has taken an unprecedented approach to addressing the interconnected challenges of climate change and international trade. The three-day summit, hosted in Geneva, marks a significant shift in how global economic policies are being shaped in response to environmental concerns.

The opening session, led by UN Secretary-General António Guterres, emphasized the urgent need for economic frameworks that prioritize sustainability without compromising global trade relationships. "We are at a critical juncture where economic prosperity and environmental stewardship must go hand in hand," Guterres stated during his keynote address.

Key discussions have centered around the implementation of carbon border adjustments, which would impose tariffs on imports from countries with less stringent climate policies. European Union representatives have been particularly vocal about these measures, arguing they are essential for maintaining fair competition while incentivizing global climate action.

The summit has also addressed the growing concern over supply chain resilience in the face of climate-related disruptions. Recent studies indicate that extreme weather events have caused over $150 billion in supply chain disruptions globally in the past year alone.

Technology transfer agreements have emerged as another focal point, with developed nations committing to share clean energy technologies with developing countries. This initiative aims to accelerate the global transition to renewable energy while ensuring that emerging economies can participate meaningfully in the green revolution.

Business leaders from major corporations have expressed cautious optimism about the proposed frameworks. Tesla CEO Elon Musk, speaking at a parallel business forum, noted that "regulatory clarity and international cooperation are exactly what we need to scale clean technology solutions globally."

The summit is expected to conclude with a comprehensive agreement outlining specific commitments for carbon reduction, trade policy harmonization, and technology sharing mechanisms.`,
    author: 'Sarah Mitchell',
    publishedAt: '2024-01-15T10:30:00Z',
    category: categories[1],
    imageUrl: 'https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Global Economy', 'Climate Change', 'Trade', 'Summit'],
    readTime: 8,
    isFeatured: true,
    isBreaking: true,
    metaDescription: 'World leaders gather at Global Economic Summit to discuss climate change and trade relations. Comprehensive coverage of key agreements and policy developments.',
    keywords: 'global economic summit, climate change, trade relations, carbon border adjustments, technology transfer, sustainable development',
    canonicalUrl: 'https://newshubpro.org/category/business/global-economic-summit-climate-change-trade-relations'
  },
  {
    id: '2',
    title: 'Revolutionary AI Technology Transforms Healthcare Diagnosis',
    slug: 'revolutionary-ai-technology-healthcare-diagnosis',
    summary: 'New artificial intelligence system demonstrates 94% accuracy in early disease detection, potentially saving millions of lives.',
    content: `A groundbreaking artificial intelligence system developed by researchers at Stanford Medical School has achieved a remarkable 94% accuracy rate in early-stage disease detection, marking a significant leap forward in preventive healthcare technology.

The AI system, dubbed "MediScan Pro," utilizes advanced machine learning algorithms to analyze medical imaging data, blood test results, and patient history to identify potential health issues before they become symptomatic. The technology has been tested across multiple medical institutions over the past two years, involving over 50,000 patient cases.

Dr. Elena Rodriguez, lead researcher on the project, explained that the system can detect early signs of cardiovascular disease, certain cancers, and neurological conditions with unprecedented accuracy. "What typically takes weeks of testing and specialist consultations can now be accomplished in minutes with remarkable precision," Rodriguez noted during yesterday's press conference.

The technology's most impressive achievement is its ability to identify cardiac risk factors up to five years before traditional methods. In clinical trials, MediScan Pro successfully predicted heart disease in 89% of cases where patients later developed cardiovascular complications.

Hospital administrators are particularly excited about the system's potential to reduce healthcare costs. Early estimates suggest that widespread adoption could reduce diagnostic costs by up to 40% while significantly improving patient outcomes through earlier intervention.

The FDA has fast-tracked the approval process for MediScan Pro, with initial approval expected within six months. Several major healthcare networks, including Mayo Clinic and Johns Hopkins, have already expressed interest in implementing the technology.

Privacy concerns have been addressed through advanced encryption protocols that ensure patient data remains secure while allowing the AI to perform its diagnostic functions. The system operates on a decentralized model that keeps sensitive information within individual healthcare institutions.`,
    author: 'Dr. Michael Chen',
    publishedAt: '2024-01-15T08:15:00Z',
    category: categories[4],
    imageUrl: 'https://images.pexels.com/photos/3912468/pexels-photo-3912468.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Healthcare', 'AI', 'Technology', 'Medicine'],
    readTime: 6,
    isTrending: true,
    metaDescription: 'Revolutionary AI system achieves 94% accuracy in early disease detection. Stanford Medical School breakthrough could transform healthcare diagnosis.',
    keywords: 'AI healthcare, medical diagnosis, artificial intelligence, disease detection, MediScan Pro, Stanford Medical School, preventive healthcare',
    canonicalUrl: 'https://newshubpro.org/category/technology/revolutionary-ai-technology-healthcare-diagnosis'
  },
  {
    id: '3',
    title: 'Historic Space Mission Launches to Establish First Lunar Research Station',
    slug: 'historic-space-mission-lunar-research-station',
    summary: 'International space agencies collaborate on ambitious project to create permanent human presence on the Moon.',
    content: `In an unprecedented display of international cooperation, space agencies from six nations have successfully launched the first phase of the Lunar Research Initiative, aimed at establishing a permanent human research station on the Moon by 2028.

The mission, launched from Kennedy Space Center, represents the largest collaborative space effort since the International Space Station. The spacecraft carries advanced habitat modules, scientific equipment, and supplies for a six-month lunar deployment.

NASA Administrator Dr. Patricia Williams emphasized the mission's significance: "This represents humanity's next great leap into space exploration. The lunar research station will serve as a stepping stone for future Mars missions while providing invaluable scientific insights about our solar system."

The international team includes astronauts from NASA, ESA, JAXA, and the Canadian Space Agency, with additional support from private aerospace companies including SpaceX and Blue Origin. The mission timeline spans five years, with the first crew expected to arrive at the lunar station in late 2025.

Scientific objectives include studying the Moon's geology, testing sustainable life support systems, and conducting experiments in low gravity environments. The station will also serve as a testbed for technologies essential for long-duration space missions.

The lunar base will be powered entirely by solar panels and nuclear reactors, making it energy self-sufficient. Advanced 3D printing technology will enable the crew to manufacture tools and equipment using lunar materials, reducing dependency on Earth-based supplies.

Environmental monitoring systems will collect data about cosmic radiation exposure and its effects on human physiology, providing crucial information for future deep space missions. The station's research findings will be shared globally, advancing scientific understanding for all participating nations.

Commercial partnerships have been integral to the mission's success, with several companies contributing innovative technologies and funding. This public-private collaboration model is expected to become the standard for future large-scale space initiatives.`,
    author: 'Captain Lisa Park',
    publishedAt: '2024-01-14T16:45:00Z',
    category: categories[4],
    imageUrl: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Space', 'NASA', 'International', 'Research'],
    readTime: 7,
    isFeatured: true,
    metaDescription: 'Historic international space mission launches to establish first permanent lunar research station. Six nations collaborate on ambitious Moon base project.',
    keywords: 'lunar research station, space mission, NASA, international space cooperation, Moon base, space exploration, lunar colony',
    canonicalUrl: 'https://newshubpro.org/category/technology/historic-space-mission-lunar-research-station'
  },
  {
    id: '4',
    title: 'Championship Finals Set Record Viewership as Underdog Team Advances',
    slug: 'championship-finals-record-viewership-underdog-team',
    summary: 'Rookie-dominated team defeats three-time champions in stunning upset, drawing largest audience in tournament history.',
    content: `In one of the most shocking upsets in professional sports history, the Detroit Lions defeated the three-time defending champion Kansas City Chiefs 28-21 in the NFC Championship, setting up a Super Bowl matchup that has captured the imagination of fans worldwide.

The Lions, led by rookie quarterback Marcus Thompson, overcame a 14-point deficit in the fourth quarter to secure their first Super Bowl appearance since 1957. Thompson's performance was nothing short of spectacular, throwing for 387 yards and four touchdowns while rushing for an additional 52 yards.

The game drew a record 67.8 million viewers, making it the most-watched conference championship in NFL history. Social media engagement reached unprecedented levels, with over 45 million tweets posted during the game using the hashtag #LionsRoar.

Head coach Dan Campbell, known for his emotional leadership style, was moved to tears during the post-game interview. "This team has shown incredible heart and determination. These young men have worked tirelessly to get to this moment, and they deserve every bit of success coming their way," Campbell said.

The Lions' success story has become a symbol of perseverance and teamwork. The team features seven rookies in starting positions, making them the youngest team to reach a Super Bowl in over three decades. Their rise from last place just two seasons ago has inspired fans and analysts alike.

Economic impact projections for Detroit are staggering, with estimates suggesting the Super Bowl run could generate over $200 million in local revenue. Merchandise sales have increased by 340% since the championship victory, and ticket prices for the Super Bowl have reached record highs.

The Chiefs, despite the loss, showed remarkable sportsmanship. Quarterback Patrick Mahomes congratulated the Lions players personally, stating that "the best team won today, and we look forward to another chance next year."

Super Bowl preparations are already underway, with Las Vegas preparing to host what many predict will be the most-watched sporting event in American television history.`,
    author: 'James Rodriguez',
    publishedAt: '2024-01-14T22:30:00Z',
    category: categories[3],
    imageUrl: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['NFL', 'Championship', 'Sports', 'Detroit Lions'],
    readTime: 5,
    isTrending: true,
    metaDescription: 'Detroit Lions defeat Kansas City Chiefs in stunning NFC Championship upset. Record 67.8 million viewers watch historic underdog victory.',
    keywords: 'Detroit Lions, Kansas City Chiefs, NFC Championship, NFL playoffs, Super Bowl, Marcus Thompson, Dan Campbell, record viewership',
    canonicalUrl: 'https://newshubpro.org/category/sports/championship-finals-record-viewership-underdog-team'
  },
  {
    id: '5',
    title: 'Streaming Wars Heat Up as Netflix Announces Major Studio Acquisition',
    slug: 'streaming-wars-netflix-major-studio-acquisition',
    summary: 'Netflix acquires legendary film studio for $15 billion, marking the largest entertainment industry deal in decades.',
    content: `Netflix has announced its acquisition of Paramount Pictures for $15.2 billion, marking the streaming giant's bold move into traditional film production and distribution. The deal, finalized after months of negotiations, represents the largest entertainment industry acquisition since Disney's purchase of 21st Century Fox.

The acquisition gives Netflix access to Paramount's extensive film library, including iconic franchises such as Mission: Impossible, Transformers, and Star Trek. Additionally, Netflix will gain control of Paramount's production facilities and distribution networks, significantly expanding its content creation capabilities.

Netflix CEO Reed Hastings described the acquisition as "a natural evolution of our content strategy." The company plans to integrate Paramount's theatrical releases with its streaming platform while maintaining the studio's traditional cinema distribution model.

Industry analysts project that the deal will intensify competition in the streaming market, potentially forcing other platforms to pursue similar acquisitions. Disney+, Amazon Prime Video, and HBO Max are all reportedly exploring strategic partnerships to counter Netflix's expanded content portfolio.

The merger is expected to create over 2,000 new jobs in Los Angeles and New York, with Netflix committing to maintain Paramount's current production schedules. Several high-profile directors, including Christopher Nolan and Denis Villeneuve, have expressed enthusiasm about the creative possibilities the merger presents.

Shareholders approved the deal overwhelmingly, with Paramount stock rising 23% following the announcement. The transaction is subject to regulatory approval, which is expected to be completed within 12-18 months.

The acquisition also includes Paramount's television production arm, which produces popular series for multiple networks. This addition will significantly boost Netflix's content library and provide new opportunities for franchise development across multiple media formats.

Financial projections suggest the combined entity could save $800 million annually through operational efficiencies while investing an additional $2 billion in original content production over the next three years.`,
    author: 'Emma Thompson',
    publishedAt: '2024-01-14T14:20:00Z',
    category: categories[2],
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Entertainment', 'Streaming', 'Netflix', 'Acquisition'],
    readTime: 6,
    metaDescription: 'Netflix acquires Paramount Pictures for $15.2 billion in largest entertainment industry deal. Streaming wars intensify with major studio acquisition.',
    keywords: 'Netflix acquisition, Paramount Pictures, streaming wars, entertainment industry, Reed Hastings, content strategy, film studio merger',
    canonicalUrl: 'https://newshubpro.org/category/entertainment/streaming-wars-netflix-major-studio-acquisition'
  },
  {
    id: '6',
    title: 'New Climate Accord Signed by 150 Nations Targets Net Zero Emissions',
    slug: 'climate-accord-150-nations-net-zero-emissions',
    summary: 'Unprecedented international agreement sets binding targets for carbon neutrality with innovative enforcement mechanisms.',
    content: `Representatives from 150 nations have signed the Enhanced Paris Climate Accord, a comprehensive agreement that establishes legally binding targets for achieving net-zero carbon emissions by 2045. The accord includes unprecedented enforcement mechanisms and financial commitments totaling $2.5 trillion over the next two decades.

The agreement, negotiated over 18 months of intensive diplomatic efforts, addresses key shortcomings of previous climate agreements by incorporating economic penalties for non-compliance and rewards for exceeding targets. Each signatory nation has committed to specific emission reduction goals based on their current carbon output and economic capacity.

UN Climate Chief Dr. Amara Singh described the accord as "the most ambitious and enforceable climate agreement in human history." The agreement includes provisions for technology transfer, climate adaptation funding, and support for developing nations transitioning to renewable energy sources.

Key features of the accord include mandatory annual emission reports verified by independent monitoring systems, and a carbon credit trading system that allows nations to offset emissions through verified environmental projects. Nations that exceed their targets can sell carbon credits to those struggling to meet their goals.

The United States has committed to reducing emissions by 60% below 2005 levels by 2035, while the European Union has pledged a 70% reduction by the same date. China and India, the world's largest polluters, have agreed to peak their emissions by 2028 and achieve carbon neutrality by 2050.

Corporate leaders have responded positively to the agreement's clarity and long-term vision. Microsoft CEO Satya Nadella stated that "this level of international coordination provides the policy framework businesses need to make sustainable, long-term investments in clean technology."

The accord establishes a Global Climate Fund with initial commitments of $500 billion, primarily funded by developed nations and major corporations. This fund will support renewable energy infrastructure projects, reforestation efforts, and climate adaptation measures in vulnerable regions.

Implementation begins immediately, with the first compliance review scheduled for 2025. Nations that fail to meet interim targets will face graduated economic sanctions, while those exceeding goals will receive preferential trade status and additional funding access.`,
    author: 'Dr. Rajesh Patel',
    publishedAt: '2024-01-13T11:00:00Z',
    category: categories[0],
    imageUrl: 'https://images.pexels.com/photos/9324316/pexels-photo-9324316.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Climate', 'Politics', 'International', 'Environment'],
    readTime: 7,
    isFeatured: true,
    metaDescription: '150 nations sign Enhanced Paris Climate Accord with binding net-zero targets by 2045. $2.5 trillion commitment includes enforcement mechanisms.',
    keywords: 'climate accord, net zero emissions, Paris Agreement, carbon neutrality, climate change, international agreement, Global Climate Fund',
    canonicalUrl: 'https://newshubpro.org/category/politics/climate-accord-150-nations-net-zero-emissions'
  },
  {
    id: '7',
    title: 'Breakthrough Gene Therapy Shows Promise for Treating Alzheimers',
    slug: 'breakthrough-gene-therapy-alzheimers-treatment',
    summary: 'Clinical trials demonstrate significant cognitive improvement in early-stage Alzheimer patients using revolutionary gene editing technique.',
    content: `A revolutionary gene therapy developed by researchers at the Mayo Clinic has shown remarkable promise in treating early-stage Alzheimer's disease, with clinical trial participants demonstrating significant cognitive improvements after just six months of treatment.

The therapy, known as CRISPR-Alz, uses advanced gene editing technology to target and neutralize the amyloid plaques that characterize Alzheimer's disease. In a Phase II trial involving 240 patients, 78% showed measurable improvement in memory and cognitive function tests.

Dr. Maria Gonzalez, the study's principal investigator, explained that the therapy works by editing specific genes responsible for amyloid protein production. "We're essentially reprogramming the brain's cellular machinery to prevent the formation of toxic plaques while promoting the clearance of existing ones," Gonzalez noted.

The treatment involves a single injection of modified viral vectors that carry the therapeutic genes directly to brain cells. Unlike traditional Alzheimer's treatments that only manage symptoms, CRISPR-Alz addresses the underlying cause of the disease at the genetic level.

Patient testimonials have been encouraging. Robert Chen, a 67-year-old trial participant, reported significant improvements in his daily functioning. "I can remember conversations again, and my family says I'm much more like my old self," Chen shared during a recent follow-up appointment.

The therapy's safety profile has been exceptional, with no serious adverse events reported during the trial period. Minor side effects, including temporary headaches and mild fatigue, were reported in less than 15% of participants and resolved within days.

Pharmaceutical companies are taking notice, with several major firms expressing interest in licensing the technology. The FDA has granted breakthrough therapy designation, which could accelerate the approval process and make the treatment available to patients within two years.

Cost considerations remain a significant factor, with estimates suggesting the treatment could cost between $100,000-$150,000 per patient. However, researchers argue that the long-term savings in care costs could justify the initial investment.

The research team is now planning Phase III trials involving 1,200 patients across multiple international sites. These larger studies will provide definitive evidence of the therapy's effectiveness and safety profile.`,
    author: 'Dr. Sarah Kim',
    publishedAt: '2024-01-13T09:30:00Z',
    category: categories[5],
    imageUrl: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Health', 'Gene Therapy', 'Alzheimers', 'Medical Breakthrough'],
    readTime: 6,
    isTrending: true,
    metaDescription: 'Revolutionary CRISPR-Alz gene therapy shows 78% improvement rate in Alzheimer\'s patients. Mayo Clinic breakthrough offers new hope for treatment.',
    keywords: 'gene therapy, Alzheimers treatment, CRISPR-Alz, Mayo Clinic, cognitive improvement, amyloid plaques, medical breakthrough',
    canonicalUrl: 'https://newshubpro.org/category/health/breakthrough-gene-therapy-alzheimers-treatment'
  },
  {
    id: '8',
    title: 'Tech Giants Unite to Combat Deepfake Technology Misuse',
    slug: 'tech-giants-combat-deepfake-technology-misuse',
    summary: 'Major technology companies announce collaborative initiative to develop detection tools and prevent malicious use of AI-generated content.',
    content: `In an unprecedented show of industry cooperation, major technology companies including Google, Microsoft, Meta, and OpenAI have announced the formation of the Deepfake Detection Consortium, aimed at combating the malicious use of AI-generated synthetic media.

The consortium will develop advanced detection algorithms, establish industry standards for synthetic media labeling, and create educational resources to help users identify deepfake content. The initiative represents the largest coordinated effort to address the growing threat of AI-generated misinformation.

Meta CEO Mark Zuckerberg emphasized the urgency of the initiative during a joint press conference. "As AI technology becomes more sophisticated, we have a responsibility to ensure it's used ethically and doesn't undermine trust in authentic media," Zuckerberg stated.

The consortium's first project involves creating a comprehensive database of deepfake samples that will be used to train detection algorithms. This database will be made available to researchers, journalists, and fact-checking organizations worldwide at no cost.

Google's contribution includes advanced machine learning models that can identify subtle artifacts in synthetic media, even as deepfake technology becomes more sophisticated. The company's research has achieved 96% accuracy in detecting current deepfake technologies.

Microsoft is developing browser-based tools that will automatically flag potentially synthetic content on websites and social media platforms. These tools will be integrated into Edge browser initially, with plans to make the technology available to other browsers.

The consortium has also partnered with leading universities to establish research grants totaling $50 million over five years. These grants will support academic research into deepfake detection and the societal implications of synthetic media.

Legal experts have praised the initiative while calling for additional regulatory frameworks. Harvard Law professor Dr. Jennifer Walsh noted that "while technological solutions are important, we also need clear legal standards for the responsible use of synthetic media."

The consortium plans to release its first detection tools to the public within six months, with updates every quarter as deepfake technology evolves. The tools will be integrated into major social media platforms and news websites to provide real-time content verification.

Public awareness campaigns will accompany the technical rollout, educating users about the existence of deepfake technology and providing guidance on how to verify the authenticity of digital content.`,
    author: 'Alex Johnson',
    publishedAt: '2024-01-12T15:45:00Z',
    category: categories[4],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Technology', 'AI', 'Deepfake', 'Tech Giants'],
    readTime: 7,
    metaDescription: 'Google, Microsoft, Meta, and OpenAI form Deepfake Detection Consortium to combat AI-generated misinformation. $50 million research initiative launched.',
    keywords: 'deepfake detection, tech giants, AI misinformation, synthetic media, Google, Microsoft, Meta, OpenAI, content verification',
    canonicalUrl: 'https://newshubpro.org/category/technology/tech-giants-combat-deepfake-technology-misuse'
  },
];

// Export all articles combined
export const articles = [trendingArticle, ...allArticles, ...originalArticles, ...sportsArticles];

export const trendingTopics = [
  'Federal Reserve Rate Cut',
  'Quantum Computing Breakthrough',
  'Turkey-Syria Earthquake',
  'NFL Playoff Upset',
  'Hollywood Writers Strike',
  'Gene Therapy Success',
  'EU AI Regulation',
  'Antarctic Ice Melting',
  'Tesla Battery Innovation',
  'Supreme Court Case',
  'Messi MLS Cup',
  'Birth Control Approval',
  'Microsoft AI Investment',
  'Ukraine-Russia Ceasefire',
  'Climate Summit Agreement',
  'SpaceX Commercial Station',
  'Media Merger Deal',
  'Serena Williams Return',
  'Apple Vision Pro 2',
  'Alzheimer Drug Breakthrough',
  'Dortmund vs Monterrey',
  'Damian Lillard Trade',
  'Fever vs Lynx WNBA'
];

export const breakingNews = [
  'Federal Reserve announces emergency 0.75% interest rate cut amid banking concerns',
  'IBM achieves 1000-qubit quantum computing milestone with revolutionary processor',
  'Major 7.2 earthquake strikes Turkey-Syria border, international aid mobilizes',
  'Buffalo Bills defeat Kansas City Chiefs in overtime thriller, advance to AFC Championship',
  'Hollywood writers end 148-day strike with historic AI protection agreement'
];