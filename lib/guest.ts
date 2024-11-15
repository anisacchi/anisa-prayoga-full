import guests from '@/data/guests.json';

export function getGuest(guest: string) {
	return guests.find((name) => name.url.toLowerCase() === guest.toLowerCase())
}