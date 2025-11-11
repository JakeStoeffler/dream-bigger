# Dream Bigger 2025: Software Engineering Presentation

An interactive, modern web-based presentation for Fennimore High School's Dream Bigger Career Exploration Day.

## ✨ Latest Updates

**November 2024 - Major Revision:**
- ✅ Updated to 2025 event date
- ✅ Made AI discussion more realistic (removed "10x faster" claims, added nuance about maintainability)
- ✅ **Interactive demo** - students provide input on topic, colors, and features
- ✅ Added code snippets showing key programming concepts
- ✅ Included both remote AND in-office work perspectives
- ✅ Linked to BLS for verified salary data ($130k median)
- ✅ All learning resources now clickable links
- ✅ Updated timeline with correct career progression
- ✅ Emphasized building scalable, extensible, lasting systems
- ✅ Added grad school to education paths
- ✅ Replaced climate tech with sports technology (more relatable)
- ✅ Updated final message: "Build because you love it"

## 🎯 Overview

This presentation is designed for a 15-minute session with high school students (grades 9-12) to inspire them about careers in software engineering. It includes:

- **15 interactive slides** covering your journey, AI/LLMs, day-to-day work, salary, and inspiration
- **Live coding demonstration** where you build an app with AI assistance
- **Interactive quiz app** that students can access via QR code
- **Modern, engaging design** with smooth animations and transitions

## 🚀 Quick Start

### Running Locally

1. Open the folder in a terminal
2. Start a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Or Python 2
   python -m SimpleHTTPServer 8000

   # Or Node.js (if you have http-server installed)
   npx http-server
   ```
3. Open your browser to `http://localhost:8000`
4. Press **F** for fullscreen mode before starting!

### Navigation Controls

- **Arrow Keys**: ← Previous slide, → Next slide
- **Spacebar**: Next slide
- **Click**: Advance to next slide
- **Mouse/Touch**: Use on-screen navigation buttons
- **F Key**: Toggle fullscreen
- **Home/End**: Jump to first/last slide

## 📋 Presentation Flow (15 minutes)

### Minutes 1-2: Introduction (Slides 1-2)
- Your name and connection to Fennimore
- Journey from FHS → UW Madison → IBM → Amazon → Hinge Health → Back home

**Key Message**: You don't need to leave rural Wisconsin to work for world-class companies

---

### Minutes 3-4: What is Software Engineering (Slide 3)
- Brief overview: Problem solving, building, collaboration
- Set the stage for what the career actually involves

---

### Minutes 5-7: The AI Revolution (Slides 4-5)
- Biggest change since you graduated in 2014
- Balanced view: opportunities AND reality checks
- **Critical**: Emphasize passion over prestige

**Transition**: "Let me show you how AI has changed everything..."

---

### Minutes 8-11: LIVE DEMO (Slide 6)
**This is the centerpiece!**

1. **Switch to your coding environment** (VS Code, Cursor, etc.)
2. **Start with blank files** or minimal starter
3. **Use Claude/ChatGPT in real-time** to build the Wisconsin Quiz app
4. **Narrate your process**:
   - "I'm asking Claude to create a quiz app..."
   - "Look how it generated all this HTML..."
   - "Now I'll ask it to add animations..."
   - "Oops, there's a bug - let me ask it to fix that..."

5. **Show the result** - open demo.html in browser
6. **Emphasize**: "This took 3 minutes. That's the power of modern tools."

**Pro Tips for Demo**:
- Have demo.html already built as backup (the one in this repo)
- If something breaks, don't panic - show how you debug with AI
- Keep energy high and make it conversational
- Students might have phones down - that's okay, they'll see the QR code at the end

---

### Minutes 12-13: Day in Life, Education, Salary (Slides 7-9)
- Quick run through practical info
- Remote work emphasis
- Realistic salary expectations
- Education paths (traditional and alternative)

---

### Minute 14: Inspiration & Call to Action (Slides 11-13)
- What could THEY build?
- Free resources to start TODAY
- Dream Bigger message

**Key Quote**: "You have unprecedented tools, you can work from anywhere, you can make real impact. Start with passion, not prestige."

---

### Minute 15: QR Code & Questions (Slides 14-15)
- **NOW students can take out phones**
- QR code automatically generates on slide 14
- They scan and try the quiz you just built
- Open floor for questions
- Share your contact info

## 🎨 Customization

### Add Company Logos (Optional but Nice!)

The presentation references company logos on Slide 2. See `logos/README.md` for details.

**Quick options:**
1. **Add real logos**: Download PNG logos and place in `/logos` directory
2. **Skip logos**: Remove the `<img>` tags from the timeline items in `index.html`
3. **Leave as-is**: The presentation works fine even if logo files are missing (they just won't display)

Files needed (if you want logos):
- `uw-madison.png`
- `ibm.png`
- `227labs.png` (your consulting business - replace with your logo)
- `amazon.png`
- `hinge-health.png`
- `energy-conservatory.png`

### Update Your Info

Edit `index.html` to update:
- Your current role/company (search for "Energy Conservatory" or your current title)
- Timeline dates and events (Slide 2)
- Salary information (Slide 9) - check latest data from BLS/payscale.com
- Contact information (Slide 15)

### Modify the Demo App

The `demo.html` file contains the Wisconsin Quiz. You can:
- Change questions in the `questions` array
- Adjust styling/colors
- Add more features to make it more impressive

### Adjust Timing

If you need more/less time:
- Remove slides 10 (Job Outlook) or 8 (Education) if short on time
- Add slides about specific projects you've worked on
- Adjust demo duration (aim for 3-5 minutes max)

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Push this repo to GitHub
2. Go to Settings → Pages
3. Set source to main branch
4. Your presentation will be live at `https://yourusername.github.io/dream-bigger/`
5. QR codes will automatically work!

### Option 2: Netlify (Easy drag-and-drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag the entire folder onto the upload area
3. Get instant live URL
4. QR code will work automatically

### Option 3: Local presentation

- Run local server as shown above
- QR code won't work unless students are on same network
- Consider having students type URL manually or share it via email/text

## 🎯 Best Practices

### Before the Presentation

- [ ] Test everything on the actual computer/projector you'll use
- [ ] Check that QR code generates correctly (slide 14)
- [ ] Have backup demo ready in case live coding fails
- [ ] Test fullscreen mode (F key)
- [ ] Practice timing - aim for 12-13 minutes to leave time for Q&A
- [ ] Have your AI assistant (Claude/ChatGPT) ready in another window

### During the Presentation

- [ ] **Start in fullscreen mode** (press F)
- [ ] Keep energy high and conversational
- [ ] Don't rush the AI demo - it's the most memorable part
- [ ] If you make a mistake, embrace it! Show how you debug with AI
- [ ] Watch for time - slide 14 by minute 13-14
- [ ] Encourage questions throughout, not just at the end

### After the Presentation

- [ ] Stick around for 1-on-1 conversations
- [ ] Share your contact info (it's on slide 15)
- [ ] Consider following up with the school about interested students

## 🐛 Troubleshooting

### QR Code Not Showing

- Check browser console for errors
- Make sure qrcodejs library loaded (check network tab)
- Fallback text with URL should still appear

### Slides Not Advancing

- Try clicking directly on the slide
- Check that JavaScript console has no errors
- Refresh the page and try again

### Demo App Not Working

- Check browser console for JavaScript errors
- Make sure you're running a proper HTTP server (not just opening file://)
- Use the pre-built demo.html as backup

### Animation/Styling Issues

- Some older browsers may not support all CSS features
- Chrome/Firefox/Edge recommended
- Make sure you're in fullscreen mode for best experience

## 📝 Suggested Script Snippets

### Opening (Slide 1-2)
> "Hi everyone! My name is Jake Stoeffler. I graduated from this school 15 years ago, went to UW-Madison, and now I'm back living in Fennimore - but working remotely for companies across the country. Today I want to show you what software engineering is really like, especially with the AI revolution that's happening right now."

### Before Live Demo (Slide 5)
> "So here's the thing - when I graduated in 2014, none of these AI tools existed. Now, I use them every single day. Let me show you exactly how modern software engineers work. I'm going to build a real app in the next few minutes, and you'll get to use it at the end."

### Interactive Demo Setup (Slide 6)
> "Alright, I need your help to make this demo awesome! Let's build something together."
>
> **Ask the students:**
> - "What topic should we make the quiz about? Wisconsin? Sports? Music? Video games?"
> - "What colors do you want to see? School colors? Your favorite colors?"
> - "Any special features you want? Confetti when you win? Sound effects?"
>
> **Then show them the prompt you'll use:**
> "Watch - I'm going to ask Claude to build exactly what you just told me..."
>
> **Type the prompt live (using their input):**
> ```
> "Build an interactive quiz game about [THEIR TOPIC] with these features:
> - 5 multiple choice questions with 4 options each
> - Real-time score tracking
> - Show a fun fact after each answer
> - Colorful design using [THEIR COLORS]
> - Mobile-responsive layout
> - [THEIR SPECIAL FEATURE]
> Use HTML, CSS, and vanilla JavaScript in a single file."
> ```
>
> **As the code generates:**
> "Look at all this code it's writing... HTML structure... CSS for styling... JavaScript for the logic... This is how modern engineers work - we guide the AI, review what it creates, and make sure it's correct."

### Closing (Slide 13)
> "Here's what I want you to remember: You're living in an unprecedented time. You have tools I could only dream about when I was your age. You can learn to code for free, work from anywhere, and build things that impact millions of people. But here's the key - do it because you love it, because you're curious, because you want to solve problems. Not because of the money or the 'tech bro' lifestyle. Start with passion. Dream bigger."

## 📞 Support

Questions about this presentation? Reach out:
- Email: stoefflerj@gmail.com
- LinkedIn: linkedin.com/in/jakestoeffler
- GitHub: github.com/JakeStoeffler

## 📄 License

Feel free to use, modify, and share this presentation!

---

**Good luck with your presentation! The students are going to love it.** 🚀
