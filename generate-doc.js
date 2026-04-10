import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import { writeFileSync } from 'fs';

function sectionHeader(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    children: [new TextRun({ text, bold: true, size: 32, color: '53354a' })],
  });
}

function fieldLabel(label) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text: label, bold: true, size: 20, color: '888888', allCaps: true })],
  });
}

function editableText(text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, size: 22 })],
  });
}

function note(text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, size: 18, italics: true, color: '999999' })],
  });
}

const doc = new Document({
  sections: [{
    properties: {},
    children: [
      new Paragraph({
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: 'Website Text Content (v2)', bold: true, size: 40, color: '53354a' })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [new TextRun({ text: 'Edit the text below and I\'ll drop it into the site. Leave field labels as-is.', size: 20, color: '888888' })],
      }),

      // ===================== HERO =====================
      sectionHeader('1. HERO SECTION'),
      note('Full-screen opening section with random photography background'),

      fieldLabel('Main Heading'),
      editableText('Growth at the intersection of strategy, technology and creativity'),

      fieldLabel('Subheading'),
      editableText('30+ years helping businesses across EMEA and Asia Pacific align strategy, technology, and creativity with real-world execution.'),

      fieldLabel('Button 1 Text'),
      editableText('See my work'),

      fieldLabel('Button 2 Text'),
      editableText('Talk to me'),

      // ===================== ABOUT =====================
      sectionHeader('2. ABOUT SECTION'),
      note('Split layout: image on left, text on right'),

      fieldLabel('Section Label'),
      editableText('Who I am'),

      fieldLabel('Heading'),
      editableText('Intersection of strategy, technology and creativity'),

      fieldLabel('Paragraph 1'),
      editableText('I\'m a business leader and entrepreneur with 30+ years of experience across EMEA and APAC, with a passion for bringing technology and creativity to strategy.'),

      fieldLabel('Paragraph 2'),
      editableText('From co-founding one of the world\'s first programmatic media platforms (Xaxis) to leading large EMEA and APAC practices at Accenture and WPP, I\'ve spent my career helping companies in the technology and creative industries accelerate growth.'),

      fieldLabel('Paragraph 3'),
      editableText('I founded Verdena in 2025 to help organisations across Asia Pacific align marketing, sales, data, and technology with commercial strategy and real-world execution.'),

      fieldLabel('Pull Quote'),
      editableText('Ideas alone don\'t move the needle. Fast, high-quality execution is what separates growth from stagnation.'),

      fieldLabel('Career Timeline Entry 1'),
      editableText('Managing Director, Enterprise B2B Practice Lead | Accenture Song APAC | 2019-2025'),

      fieldLabel('Career Timeline Entry 2'),
      editableText('CEO, APAC | Wunderman (WPP) | 2016-2019'),

      fieldLabel('Career Timeline Entry 3'),
      editableText('Co-Founder & CEO, EMEA | Xaxis (WPP) | 2010-2016'),

      fieldLabel('Career Timeline Entry 4'),
      editableText('Partner | Mindshare Worldwide (WPP) | 2006-2010'),

      fieldLabel('Career Timeline Entry 5'),
      editableText('Vice President, Project Finance & Advisory Practice | Deutsche Bank Australia | 1995-2003'),

      // ===================== CURRENT WORK =====================
      sectionHeader('3. CURRENT WORK SECTION'),

      fieldLabel('Section Label'),
      editableText('Current Work'),

      fieldLabel('Heading'),
      editableText('Advisory, board roles, and strategic consulting'),

      fieldLabel('Intro Paragraph'),
      editableText('Today, I work with organisations and leadership teams across Asia Pacific to unlock growth by connecting strategy, execution, and commercial outcomes.'),

      note('--- Card 1 ---'),
      fieldLabel('Card 1: Title'),
      editableText('Verdena'),
      fieldLabel('Card 1: Role'),
      editableText('Founder & Principal'),
      fieldLabel('Card 1: Description'),
      editableText('Strategic consulting for businesses across APAC. Aligning marketing, sales, data, and technology with commercial execution and growth.'),
      fieldLabel('Card 1: Tags'),
      editableText('Growth Strategy | Data & Technology | Commercial Execution'),

      note('--- Card 2 ---'),
      fieldLabel('Card 2: Title'),
      editableText('The Scale Factory'),
      fieldLabel('Card 2: Role'),
      editableText('Strategic Advisor'),
      fieldLabel('Card 2: Description'),
      editableText('Helping industrial technology brands from North America and Europe scale and grow across Asia Pacific through strategic advisory, go-to-market acceleration, and operational excellence.'),
      fieldLabel('Card 2: Tags'),
      editableText('APAC Expansion | Client Growth | Market Strategy'),

      note('--- Card 3 ---'),
      fieldLabel('Card 3: Title'),
      editableText('The Marketing Society'),
      fieldLabel('Card 3: Role'),
      editableText('Board Member (Singapore Chapter)'),
      fieldLabel('Card 3: Description'),
      editableText('Contributing to the advancement of marketing leadership and practice across the industry through governance and strategic direction.'),
      fieldLabel('Card 3: Tags'),
      editableText('Industry Leadership | Professional Development | Strategic Governance'),

      note('--- Additional Advisory ---'),
      fieldLabel('Advisory 1: Title'),
      editableText('WGI Singapore'),
      fieldLabel('Advisory 1: Description'),
      editableText('Advisory Board Member — Founded by the then 14-year old Chance Wilson who had seen the impact of illiteracy on kids around him, WGI helps promote literacy now in seven countries around the world through a variety of engagements.'),

      fieldLabel('Advisory 2: Title'),
      editableText('Industry Speaking & Writing'),
      fieldLabel('Advisory 2: Description'),
      editableText('Author, keynote speaker, and panelist on AI, technology and creativity, and their impact on business growth.'),

      // ===================== PROJECTS =====================
      sectionHeader('4. PROJECTS SECTION'),

      fieldLabel('Section Label'),
      editableText('Active Projects'),

      fieldLabel('Heading'),
      editableText('Building ventures at the edge of tech and creativity'),

      fieldLabel('Intro Paragraph'),
      editableText('I love that with technology today, it no longer matters if I am procrastinating or building. Being lazy or being efficient. The lines have blurred to the point that they no longer exist. Here are some of the projects I am spending time on right now, from writing books, to building products.'),

      note('--- Project 1 ---'),
      fieldLabel('Project 1: Title'),
      editableText('MaskForge.ai'),
      fieldLabel('Project 1: Category'),
      editableText('AI × Motorcycles'),
      fieldLabel('Project 1: Description'),
      editableText('AI-powered platform that creates custom decals for motorcycles. Transform your OBU with generative design.'),
      fieldLabel('Project 1: URL'),
      editableText('https://maskforge.ai'),
      fieldLabel('Project 1: Tags'),
      editableText('AI Design Tool | Custom Decals | Live Platform'),

      note('--- Project 2 ---'),
      fieldLabel('Project 2: Title'),
      editableText('Caspar\'s Cabinet of Curiosities'),
      fieldLabel('Project 2: Category'),
      editableText('AI × Curation & Discovery'),
      fieldLabel('Project 2: Description'),
      editableText('A curated repository of things I find interesting, meaningful, and worth sharing. My own personal digital cabinet of wonder.'),
      fieldLabel('Project 2: URL'),
      editableText('https://ccoc.info'),
      fieldLabel('Project 2: Tags'),
      editableText('Weekly Updates | Curated Collection | Live Site'),

      note('--- Project 3 ---'),
      fieldLabel('Project 3: Title'),
      editableText('ZoomOut Project'),
      fieldLabel('Project 3: Category'),
      editableText('Education × Future of work'),
      fieldLabel('Project 3: Description'),
      editableText('A series of picture-story books that inspire and engage kids around the future and structure of work. Building context early.'),
      fieldLabel('Project 3: URL'),
      editableText('https://zoomoutproject.com'),
      fieldLabel('Project 3: Tags'),
      editableText('Picture Books | Work & Future | In Development'),

      // ===================== CREATIVE =====================
      sectionHeader('5. CREATIVE SECTION'),

      fieldLabel('Section Label'),
      editableText('Creative Practice'),

      fieldLabel('Heading'),
      editableText('Craft and patience'),

      fieldLabel('Intro Paragraph'),
      editableText('AI is enabling me to create business and products like I could never have done before. But that also means that spending time creating things in the "real world" matters to me more than it ever has before.'),

      note('--- Panel 1: Photography ---'),
      fieldLabel('Panel 1: Title'),
      editableText('Photography'),
      fieldLabel('Panel 1: Description'),
      editableText('Travel, architecture, landscapes, and street photography. There\'s something satisfying about finding the right frame — the moment where light, place, and timing align.'),
      fieldLabel('Panel 1: Link Text'),
      editableText('View photography portfolio'),
      fieldLabel('Panel 1: URL'),
      editableText('https://schlicks.com'),

      note('--- Panel 2: Model Cars ---'),
      fieldLabel('Panel 2: Title'),
      editableText('Model Cars'),
      fieldLabel('Panel 2: Description'),
      editableText('1:24 scale builds. Meditative, precise, and nerdy in the best way. Hours spent getting tiny details right — the perfect counterbalance to fast-moving commercial work.'),
      fieldLabel('Panel 2: Link Text'),
      editableText('View model car gallery'),
      fieldLabel('Panel 2: URL'),
      editableText('https://bc4fmodels.com'),

      note('--- Panel 3: Watches ---'),
      fieldLabel('Panel 3: Title'),
      editableText('Watches'),
      fieldLabel('Panel 3: Description'),
      editableText('A passion for watches — the engineering, the design, the history behind each piece. I photograph the ones I find most interesting and share them on my watch blog.'),
      fieldLabel('Panel 3: Link Text'),
      editableText('View my watch blog'),
      fieldLabel('Panel 3: URL'),
      editableText('https://www.instagram.com/watch_schlicks/'),

      // ===================== INVESTMENTS =====================
      sectionHeader('6. INVESTMENTS SECTION'),

      fieldLabel('Section Label'),
      editableText('Investments'),

      fieldLabel('Heading'),
      editableText('Backing founders I believe in'),

      fieldLabel('Intro Paragraph'),
      editableText('I invest in people and businesses across technology, food, and experience — founders with conviction and ideas worth backing.'),

      note('--- Investment 1 ---'),
      fieldLabel('Investment 1: Name'),
      editableText('375ai'),
      fieldLabel('Investment 1: Description'),
      editableText('Decentralised edge data intelligence network leveraging AI and blockchain.'),
      fieldLabel('Investment 1: Since'),
      editableText('2022'),
      fieldLabel('Investment 1: Role'),
      editableText('Investor'),

      note('--- Investment 2 ---'),
      fieldLabel('Investment 2: Name'),
      editableText('CogX'),
      fieldLabel('Investment 2: Description'),
      editableText('AI and leadership knowledge platform connecting the world\'s top thinkers.'),
      fieldLabel('Investment 2: Since'),
      editableText('2019'),
      fieldLabel('Investment 2: Role'),
      editableText('Investor'),

      note('--- Investment 3 ---'),
      fieldLabel('Investment 3: Name'),
      editableText('TiNDLE Foods'),
      fieldLabel('Investment 3: Description'),
      editableText('Plant-based food company on a mission to make sustainable eating delicious.'),
      fieldLabel('Investment 3: Since'),
      editableText('2021'),
      fieldLabel('Investment 3: Role'),
      editableText('Investor'),

      note('--- Investment 4 ---'),
      fieldLabel('Investment 4: Name'),
      editableText('Fira BeachClub Group'),
      fieldLabel('Investment 4: Description'),
      editableText('Experience-led hospitality brand in Phuket, Thailand.'),
      fieldLabel('Investment 4: Since'),
      editableText('2024'),
      fieldLabel('Investment 4: Role'),
      editableText('Investor & Advisor'),

      // ===================== CHAT CTA =====================
      sectionHeader('7. CHAT CTA SECTION'),

      fieldLabel('Heading'),
      editableText('Want to talk?'),

      fieldLabel('Body'),
      editableText('I\'ve built a chatbot trained on my voice, background, and thinking. Ask about my work, get my take on a topic, or explore ideas together.'),

      fieldLabel('Button Text'),
      editableText('Start a conversation'),

      // ===================== CONTACT =====================
      sectionHeader('8. CONTACT SECTION'),
      note('Includes contact form (Resend). Text below appears above the form.'),

      fieldLabel('Heading'),
      editableText('Let\'s connect'),

      fieldLabel('Body'),
      editableText('Whether you\'re looking for advisory support, want to discuss a project, or just want to say hello — I\'d love to hear from you.'),

      // ===================== FOOTER =====================
      sectionHeader('9. FOOTER'),

      fieldLabel('Company Name'),
      editableText('Verdena Pte Ltd'),

      fieldLabel('Tagline'),
      editableText('Growing businesses across APAC'),

      fieldLabel('Copyright'),
      editableText('© 2026 Verdena. All rights reserved.'),
    ],
  }],
});

const buffer = await Packer.toBuffer(doc);
writeFileSync('Site Content - Editable v2.docx', buffer);
console.log('Created: Site Content - Editable v2.docx');
