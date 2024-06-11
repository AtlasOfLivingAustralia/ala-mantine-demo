import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Space,
  Stack,
  Title,
  Text,
  Anchor,
  Image,
} from '@mantine/core';

import classes from './page.module.css';

export default function SpeciesDescription() {
  return (
    <>
      <Accordion variant="ala-nested">
        <AccordionItem value="summary">
          <AccordionControl>
            <Title order={3}>Summary</Title>
          </AccordionControl>
          <AccordionPanel>
            <Stack gap={15}>
              <Text>
                The emu (/ˈiːmjuː/; Dromaius novaehollandiae) is the second-tallest living bird
                after the ostrich, its ratite relative. It is endemic to Australia, where it is the
                largest native bird and the only extant member of the genus Dromaius. The emu's
                range covers most of the mainland. The Tasmanian, Kangaroo Island and King Island
                subspecies became extinct after the European settlement of Australia in 1788.
              </Text>
              <Text>
                Emus are soft-feathered, brown, flightless birds with long necks and legs, and can
                reach up to 1.9 metres (6 ft 3 in) in height. Emus can travel great distances, and
                when necessary can sprint at 48 km/h (30 mph). They forage for a variety of plants
                and insects. They can go for weeks without eating. They drink infrequently, but take
                in copious amounts of water when the opportunity arises. mythology.
              </Text>
              <Text>
                Breeding takes place in May and June, and fighting among females for a mate is
                common. Females can mate several times and lay several clutches of eggs in one
                season. The male does the incubation; during this process he hardly eats or drinks
                and loses a significant amount of weight. The eggs hatch after around eight weeks,
                and the young are nurtured by their fathers. They reach full size after around six
                months, but can remain as a family unit until the next breeding season. The emu is
                an important cultural icon of Australia, appearing on the coat of arms and various
                coins. The bird features prominently in Indigenous Australian
              </Text>
              <Text>
                Breeding takes place in May and June, and fighting among females for a mate is
                common. Females can mate several times and lay several clutches of eggs in one
                season. The male does the incubation; during this process he hardly eats or drinks
                and loses a significant amount of weight. The eggs hatch after around eight weeks,
                and the young are nurtured by their fathers. They reach full size after around six
                months, but can remain as a family unit until the next breeding season. The emu is
                an important cultural icon of Australia, appearing on the coat of arms and various
                coins. The bird features prominently in Indigenous Australian
              </Text>
              <Text>
                Source: <Anchor>Wikipedia</Anchor> Content may be excluded.{' '}
                <Anchor>Creative Commons Attribution-ShareAlike License 4.0</Anchor>
              </Text>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="etymology">
          <AccordionControl>
            <Title order={3}>Etymology</Title>
          </AccordionControl>
          <AccordionPanel>
            <Stack gap={15}>
              <Text>
                The etymology of the common name "emu" is uncertain, but is thought to have come
                from an Arabic word for large bird that was later used by Portuguese explorers to
                describe the related cassowary in Australia and New Guinea. Another theory is that
                it comes from the word "ema", which is used in Portuguese to denote a large bird
                akin to an ostrich or crane. In Victoria, some terms for the emu were Barrimal in
                the Dja Dja Wurrung language, myoure in Gunai, and courn in Jardwadjali. The birds
                were known as murawung or birabayin to the local Eora and Darug inhabitants of the
                Sydney basin.
              </Text>
              <Text>
                Source: <Anchor>Wikipedia</Anchor> Content may be excluded.{' '}
                <Anchor>Creative Commons Attribution-ShareAlike License 4.0</Anchor>
              </Text>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="taxonomy">
          <AccordionControl>
            <Title order={3}>Taxonomy</Title>
          </AccordionControl>
          <AccordionPanel>
            <Stack gap={15}>
              <Title className={classes.subheader} order={4}>
                History
              </Title>
              <Text>
                Emus were first reported as having been seen by Europeans when explorers visited the
                western coast of Australia in 1696. This was during an expedition led by Dutch
                captain Willem de Vlamingh who was searching for survivors of a ship that had gone
                missing two years earlier. The birds were known on the eastern coast before 1788,
                when the first Europeans settled there. The birds were first mentioned under the
                name of the "New Holland cassowary" in Arthur Phillip's Voyage to Botany Bay,
                published in 1789 with the following description:
              </Text>
              <Text>
                This is a species differing in many particulars from that generally known, and is a
                much larger bird, standing higher on its legs and having the neck longer than in the
                common one. Total length seven feet two inches. The bill is not greatly different
                from that of the common Cassowary; but the horny appendage, or helmet on top of the
                head, in this species is totally wanting: the whole of the head and neck is also
                covered with feathers, except the throat and fore part of the neck about half way,
                which are not so well feathered as the rest; whereas in the common Cassowary the
                head and neck are bare and carunculated as in the turkey.
              </Text>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Emu_skeleton.jpg/190px-Emu_skeleton.jpg" />
              <Text size="sm">Mounted emu skeleton.</Text>
              <Text>
                The species was named by ornithologist John Latham in 1790 based on a specimen from
                the Sydney area of Australia, a country which was known as New Holland at the time.
                He collaborated on Phillip's book and provided the first descriptions of, and names
                for, many Australian bird species; Dromaius comes from a Greek word meaning "racer"
                and novaehollandiae is the Latin term for New Holland, so the name can be rendered
                as "fast-footed New Hollander". In his original 1816 description of the emu, the
                French ornithologist Louis Pierre Vieillot used two generic names, first Dromiceius
                and later Dromaius. It has been a point of contention ever since as to which name
                should be used; the latter is more correctly formed, but the convention in taxonomy
                is that the first name given to an organism stands, unless it is clearly a
                typographical error. Most modern publications, including those of the Australian
                government, use Dromaius, with Dromiceius mentioned as an alternative spelling.
              </Text>
              <Title className={classes.subheader} order={4}>
                Physical appearance
              </Title>
              <Text>
                The emu is the second tallest bird in the world, only being exceeded in height by
                the ostrich; the largest individuals can reach up to 150 to 190 cm (59 to 75 in) in
                height. Measured from the bill to the tail, emus range in length from 139 to 164 cm
                (55 to 65 in), with males averaging 148.5 cm (58.5 in) and females averaging 156.8
                cm (61.7 in). Emus are the fourth or fifth heaviest living bird after the two
                species of ostrich and two larger species of cassowary, weighing slightly more on
                average than an emperor penguin. Adult emus weigh between 18 and 60 kg (40 and 132
                lb), with an average of 31.5 and 37 kg (69 and 82 lb) in males and females,
                respectively. Females are usually slightly larger than males and are substantially
                wider across the rump.
              </Text>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dromaius_novaehollandiae_-zoo_-two_feet.jpg/1280px-Dromaius_novaehollandiae_-zoo_-two_feet.jpg" />
              <Text size="sm">
                Emus have three toes on each foot in a tridactyl arrangement, which is an adaptation
                for running and is seen in other birds, such as bustards and quails.
              </Text>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="distributionhabitat">
          <AccordionControl>
            <Title order={3}>Distribution and habitat</Title>
          </AccordionControl>
          <AccordionPanel>
            <Stack gap={15}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinnacles_040116_gnangarra-102.jpg/220px-Pinnacles_040116_gnangarra-102.jpg" />
              <Text size="sm">Adult and juvenile foot prints.</Text>
              <Text>
                Once common on the east coast of Australia, emus are now uncommon there; by
                contrast, the development of agriculture and the provision of water for stock in the
                interior of the continent have increased the range of the emu in arid regions. Emus
                live in various habitats across Australia both inland and near the coast. They are
                most common in areas of savannah woodland and sclerophyll forest, and least common
                in heavily populated districts and arid areas with annual precipitation of less than
                600 millimetres (24 in). Emus predominantly travel in pairs, and while they can form
                large flocks, this is an atypical social behaviour that arises from the common need
                to move towards a new food source. Emus have been shown to travel long distances to
                reach abundant feeding areas. In Western Australia, emu movements follow a distinct
                seasonal pattern – north in summer and south in winter. On the east coast their
                wanderings seem to be more random and do not appear to follow a set pattern.
              </Text>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emus_bathing_Feb09.jpg/220px-Emus_bathing_Feb09.jpg" />
              <Text size="sm">Emus bathing on a very hot summer day in a shallow pond.</Text>
              <Text>
                Emus begin to settle down at sunset and sleep during the night. They do not sleep
                continuously but rouse themselves several times during the night. When falling
                asleep, emus first squat on their tarsi and enter a drowsy state during which they
                are alert enough to react to stimuli and quickly return to a fully awakened state if
                disturbed.
              </Text>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Space h={15} />
    </>
  );
}
