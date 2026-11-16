import fs from 'node:fs';
for (const file of ['index.html','gallery.html']) {
 let html=fs.readFileSync('dist/'+file,'utf8');
 html=html.replace(/<a class="button button-outline topbar-cta"[^>]*>[\s\S]*?<\/a>/,'<a class="button button-outline topbar-cta" href="mailto:jebisam12@gmail.com?subject=CV%20request" aria-label="Request Jebickson Samuel’s CV by email" title="Request CV by email">CV <svg><use href="#down"/></svg></a>');
 html=html.replace('<span>All rights reserved.</span>','<span>All rights reserved.</span><div class="footer-links"><a href="privacy.html">Privacy</a><a href="legal.html">Legal Notice</a></div>');
 fs.writeFileSync('dist/'+file,html);
}
const template=fs.readFileSync('dist/gallery.html','utf8');
const pages={privacy:['Privacy','This portfolio does not include analytics, advertising cookies, or a contact form. Project and social links open external services with their own privacy policies. The hosting provider may process access logs to operate and secure the website.','Email links open your own email application. Messages you choose to send are delivered to jebisam12@gmail.com. Contact this address for questions about information you share by email.'],legal:['Legal Notice','This is the personal development portfolio of Jebickson Samuel. Contact: jebisam12@gmail.com.','Project descriptions summarize the linked repositories. Project cover illustrations are diagrams rather than screenshots. Linked demos are hosted separately and may have availability or authentication requirements. Certification information will be added when available.']};
for(const [slug,[title,...paragraphs]] of Object.entries(pages)){
 const section='<section class="section legal-page"><a href="index.html">← Back to portfolio</a><div class="section-heading"><h1>'+title+'</h1></div>'+paragraphs.map(p=>'<p>'+p+'</p>').join('')+'</section>';
 fs.writeFileSync('dist/'+slug+'.html',template.replace(/<section id="projects"[\s\S]*?<footer>/,section+'<footer>').replace('<script src="app.js" defer></script>',''));
}
const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));pkg.description='Jebickson Samuel development portfolio and project gallery';fs.writeFileSync('package.json',JSON.stringify(pkg,null,2));
