// app/api/contact/route.js
export async function POST(req) {
    const { name, email, message } = await req.json();
    
    // Logic to handle contact form submission
    console.log(`Received message from ${name} (${email}): ${message}`);
  
    return new Response('Message sent successfully', { status: 200 });
  }
  