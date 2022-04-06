import rocketsReducer, { addRocket } from "../../redux/rockets/rocketsReducer";
import rockets from './_rockets'

test('add rocket action', () => {
  const object = rockets[0]
  expect(addRocket({
    id: object.id,
    name: object.rocket_name,
    flickrImages: object.flickr_images,
    description: object.description,
  }))
    .toEqual({
      "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
      "flickrImages": [
        "https://imgur.com/DaCfMsj.jpg",
        "https://imgur.com/azYafd8.jpg"
      ],
      "id": 1,
      "name": "Falcon 1",
      "type": "rockets/addrocket"
    })
})

test('rockets reducer', () => {
  const initialState = [{
    "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    "flickrImages": [
      "https://imgur.com/DaCfMsj.jpg",
      "https://imgur.com/azYafd8.jpg"
    ],
    "id": 1,
    "name": "Falcon 1",
    "type": "rockets/addrocket"
  }]

  const object = rockets[1]

  expect(rocketsReducer(initialState, addRocket({
    id: object.id,
    name: object.rocket_name,
    flickrImages: object.flickr_images,
    description: object.description,
  }))).toEqual([{
    "description": "The Falcon 1 was an expendable launch system privately developed and \
manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
    "flickrImages": ["https://imgur.com/DaCfMsj.jpg", "https://imgur.com/azYafd8.jpg"],
    "id": 1, "name": "Falcon 1", "type": "rockets/addrocket"
  },
  {
    "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for \
the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
    "flickrImages": ["https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg", "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg", "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg", "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg", "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg", "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"],
    "id": 2,
    "name": "Falcon 9"
  }])
})