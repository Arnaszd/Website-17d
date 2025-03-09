// @ts-ignore
import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

serve(async (req) => {
  // Tikriname, ar užklausa yra POST metodas
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Metodas turi būti POST' }),
      { 
        status: 405,
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }

  try {
    // Gauname duomenis iš užklausos
    const { recaptchaToken, ...formData } = await req.json();

    // Tikriname, ar yra reCAPTCHA token
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({ error: 'reCAPTCHA token yra privalomas' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Tikriname reCAPTCHA token su Google API
    // @ts-ignore
    const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY');
    if (!recaptchaSecret) {
      throw new Error('RECAPTCHA_SECRET_KEY aplinkos kintamasis nenustatytas');
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });

    const recaptchaResult = await recaptchaResponse.json();

    // Jei reCAPTCHA patikrinimas nepavyko
    if (!recaptchaResult.success) {
      return new Response(
        JSON.stringify({ error: 'reCAPTCHA patikrinimas nepavyko', details: recaptchaResult }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Jei reCAPTCHA patikrinimas pavyko, apdorojame formą
    // Čia galite įdėti savo formos duomenų apdorojimo logiką
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Forma sėkmingai pateikta',
        data: formData
      }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Įvyko klaida apdorojant užklausą', details: error.message }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
})