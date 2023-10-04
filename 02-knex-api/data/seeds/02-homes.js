/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('homes').truncate()
  await knex('homes').insert([
    {
      house_id: 1,
      title: 'Beautiful Beachfront Villa',
      description: 'Luxurious villa located right on the beach with stunning ocean views',
      guests: 10,
      address: '123 Ocean Avenue, Cancun',
      rental_price: 2000
    },
    {
      house_id: 2,
      title: 'Cozy Mountain Cabin',
      description: 'Charming cabin nestled in the mountains with breathtaking views',
      guests: 6,
      address: '456 Pine Street, Aspen',
      rental_price: 1500
    },
    {
      house_id: 3,
      title: 'Modern Downtown Loft',
      description: 'Sleek and stylish loft apartment in the heart of the city',
      guests: 4,
      address: '789 Main Street, New York',
      rental_price: 1000
    },
    {
      house_id: 4,
      title: 'Rustic Country Cottage',
      description: 'Quaint cottage surrounded by peaceful countryside',
      guests: 2,
      address: '321 Meadow Lane, Provence',
      rental_price: 800
    },
    {
      house_id: 5,
      title: 'Luxury Penthouse Suite',
      description: 'Elegant penthouse with panoramic city views',
      guests: 8,
      address: '987 Skytower Road, Dubai',
      rental_price: 2500
    },
    {
      house_id: 6,
      title: 'Secluded Beach Bungalow',
      description: 'Private bungalow steps away from a secluded beach',
      guests: 2,
      address: '654 Paradise Lane, Maldives',
      rental_price: 1200
    },
    {
      house_id: 7,
      title: 'Historic Tuscan Villa',
      description: 'Magnificent villa steeped in history and surrounded by vineyards',
      guests: 12,
      address: '753 Vineyard Avenue, Tuscany',
      rental_price: 3000
    },
    {
      house_id: 8,
      title: 'Charming Lakeside Cabin',
      description: 'Quaint cabin overlooking a peaceful lake',
      guests: 4,
      address: '852 Lakeview Drive, Canada',
      rental_price: 900
    },
    {
      house_id: 9,
      title: 'Modern City Apartment',
      description: 'Contemporary apartment in the heart of the bustling city',
      guests: 2,
      address: '951 City Center, Tokyo',
      rental_price: 1500
    },
    {
      house_id: 10,
      title: 'Spacious Family Home',
      description: 'Large and comfortable home perfect for families',
      guests: 6,
      address: '753 Family Street, Sydney',
      rental_price: 1800
    },
    {
      house_id: 11,
      title: 'Seaside Villa',
      description: 'Stunning villa with direct access to a pristine beach',
      guests: 8,
      address: '246 Oceanfront Road, Bali',
      rental_price: 2200
    },
    {
      house_id: 12,
      title: 'Cozy Cabin Retreat',
      description: 'Warm and inviting cabin nestled in the woods',
      guests: 2,
      address: '852 Forest Lane, Colorado',
      rental_price: 1000
    },
    {
      house_id: 13,
      title: 'Luxury Skyline Apartment',
      description: 'Opulent apartment with breathtaking views of the city skyline',
      guests: 4,
      address: '963 Skyline Avenue, Dubai',
      rental_price: 2000
    },
    {
      house_id: 14,
      title: 'Serenity by the Lake',
      description: 'Peaceful retreat overlooking a tranquil lake',
      guests: 2,
      address: '753 Lakeview Terrace, Switzerland',
      rental_price: 1500
    },
    {
      house_id: 15,
      title: 'Rustic Mountain Lodge',
      description: 'Authentic lodge surrounded by majestic mountains',
      guests: 10,
      address: '321 Mountain Road, Whistler',
      rental_price: 2500
    },
    {
      house_id: 16,
      title: 'Modern Beachfront Condo',
      description: 'Contemporary condo with stunning beach views',
      guests: 4,
      address: '951 Beachfront Avenue, Miami',
      rental_price: 1800
    },
    {
      house_id: 17,
      title: 'Romantic Countryside Retreat',
      description: 'Romantic getaway in a picturesque countryside setting',
      guests: 2,
      address: '654 Countryside Lane, Provence',
      rental_price: 1200
    },
    {
      house_id: 18,
      title: 'Luxury City Penthouse',
      description: 'Exclusive penthouse with panoramic city views',
      guests: 6,
      address: '852 City Center, New York',
      rental_price: 3000
    },
    {
      house_id: 19,
      title: 'Quaint Cottage by the River',
      description: 'Charming cottage located by a peaceful river',
      guests: 4,
      address: '753 Riverside Road, England',
      rental_price: 1000
    },
    {
      house_id: 20,
      title: 'Chic Urban Loft',
      description: 'Stylish loft apartment in the heart of the city',
      guests: 2,
      address: '951 Loft Street, Paris',
      rental_price: 1500
    },
    {
      house_id: 21,
      title: 'Family-Friendly Beach House',
      description: 'Spacious beach house perfect for families',
      guests: 8,
      address: '246 Beachside Avenue, California',
      rental_price: 2200
    },
    {
      house_id: 22,
      title: 'Peaceful Mountain Retreat',
      description: 'Tranquil retreat surrounded by scenic mountains',
      guests: 4,
      address: '852 Mountain View Drive, Colorado',
      rental_price: 1200
    },
    {
      house_id: 23,
      title: 'Luxury Waterfront Villa',
      description: 'Exquisite villa with stunning waterfront views',
      guests: 10,
      address: '753 Waterfront Road, Maldives',
      rental_price: 2500
    },
    {
      house_id: 24,
      title: 'Rustic Log Cabin',
      description: 'Cozy log cabin nestled in nature',
      guests: 2,
      address: '321 Log Lane, Canada',
      rental_price: 900
    },
    {
      house_id: 25,
      title: 'Modern City Escape',
      description: 'Sleek and modern apartment in a bustling city',
      guests: 2,
      address: '951 City Center, London',
      rental_price: 1500
    },
    {
      house_id: 26,
      title: 'Elegant Villa with Pool',
      description: 'Elegant villa with a private pool and beautiful garden',
      guests: 12,
      address: '963 Villa Street, Italy',
      rental_price: 3000
    },
    {
      house_id: 27,
      title: 'Lakefront Retreat',
      description: 'Peaceful retreat on the shores of a serene lake',
      guests: 4,
      address: '753 Lakeview Drive, Canada',
      rental_price: 1000
    },
    {
      house_id: 28,
      title: 'Luxury Skyscraper Apartment',
      description: 'Luxurious apartment in a towering skyscraper',
      guests: 4,
      address: '852 Skyscraper Avenue, Dubai',
      rental_price: 2000
    },
    {
      house_id: 29,
      title: 'Tranquil Forest Cabin',
      description: 'Serene cabin surrounded by lush forests',
      guests: 2,
      address: '654 Forest Lane, Oregon',
      rental_price: 1200
    },
    {
      house_id: 30,
      title: 'Secluded Island Retreat',
      description: 'Private retreat on a secluded island paradise',
      guests: 6,
      address: '951 Island Beach, Maldives',
      rental_price: 1800
    }
  ])
}
