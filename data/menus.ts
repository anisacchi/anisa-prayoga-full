import {
	Chat,
	ChatFill,
	Gift,
	GiftFill,
	Hearts,
	HeartsFill,
	Home,
	HomeFill,
	Panorama,
	PanoramaFill,
	WeddingArch,
	WeddingArchFill,
} from '@/components/icons';

export const menus =
	[
		{
			"name": "Home",
			"id": "home",
			"icon": {
				"line": Home,
				"fill": HomeFill
			}
		},
		{
			"name": "Couple",
			"id": "couple",
			"icon": {
				"line": Hearts,
				"fill": HeartsFill
			}
		},
		{
			"name": "Event",
			"id": "schedule",
			"icon": {
				"line": WeddingArch,
				"fill": WeddingArchFill
			}
		},
		{
			"name": "Moments",
			"id": "moments",
			"icon": {
				"line": Panorama,
				"fill": PanoramaFill
			}
		},
		{
			"name": "Gift",
			"id": "gift",
			"icon": {
				"line": Gift,
				"fill": GiftFill
			}
		},
		{
			"name": "Wishes",
			"id": "wishes",
			"icon": {
				"line": Chat,
				"fill": ChatFill
			}
		}
	]