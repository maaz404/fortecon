# 📧 EmailJS Setup Guide

Your contact form is now configured to send emails using EmailJS. Follow these steps to complete the setup:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (free account)
3. Verify your email address

### Step 2: Add Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy the **Service ID** (looks like: `service_abc1234`)

### Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the Fortecon website contact form.
```

4. Copy the **Template ID** (looks like: `template_xyz5678`)

### Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like: `aBcDeFgHiJkLmNoPqR`)

### Step 5: Update Contact.jsx

Open `src/components/Contact.jsx` and replace these lines (around line 33-35):

```javascript
const serviceID = "YOUR_SERVICE_ID"; // Replace with your Service ID
const templateID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key
```

**Example:**

```javascript
const serviceID = "service_abc1234";
const templateID = "template_xyz5678";
const publicKey = "aBcDeFgHiJkLmNoPqR";
```

### Step 6: Install & Test

```bash
# Install the new dependency
npm install

# Restart your dev server
npm run dev

# Test the form at http://localhost:5173
```

## ✅ Testing

1. Fill out the contact form on your website
2. Click "Send Message"
3. You should see a success message
4. Check your email inbox for the submission

## 🎯 What Happens Now?

When someone submits the contact form:

1. ✅ Their details are sent via EmailJS
2. ✅ You receive an email with their information
3. ✅ They see a success message
4. ✅ The form clears automatically
5. ✅ If it fails, they see an error message

## 📧 Email You'll Receive

```
Subject: New Contact Form Submission from [Customer Name]

From: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]

Message:
[Their message]

---
This message was sent from the Fortecon website contact form.
```

## 🔒 Security Notes

- Your EmailJS keys are safe in the frontend (they're designed for client-side use)
- EmailJS free tier: 200 emails/month
- Paid plans available for higher volume

## 🆘 Troubleshooting

**Error: "Failed to send message"**

- Check if you replaced all three IDs correctly
- Verify your EmailJS service is connected
- Check browser console (F12) for detailed errors

**Not receiving emails?**

- Check your spam folder
- Verify the email service is properly connected in EmailJS dashboard
- Test with EmailJS's test feature first

**Rate limit exceeded?**

- Free tier: 200 emails/month
- Upgrade to paid plan if needed

## 🎨 Customization

Want to customize the email format?

- Edit the template in EmailJS dashboard
- You can add HTML styling
- Available variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`

## 📝 Free Tier Limits

EmailJS Free Plan:

- ✅ 200 emails/month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Perfect for small businesses

Need more? Paid plans start at $7/month for 1,000 emails.

---

**That's it! Your contact form now sends real emails.** 📧✨
