import guests from '@/data/guests.json';

export async function GET() {
  return new Response(JSON.stringify(guests), {
    headers: { 'Content-Type': 'application/json' },
  });
}
