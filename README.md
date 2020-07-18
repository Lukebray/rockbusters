# Rockbusters API

My first API which is based on Karl Pilkington's famous quiz "Rockbusters" (sounds a little bit like Blockbusters).

### Current Routes
* `/rockbusters` will get all rockbusters in the database (more to be added)

* `/rockbusters/ID` will get the rockbuster you specify

* `/rockbusters/add` will allow you to post your own rockbuster 

example post body would be: 
`{
    "clue": "Why are them Jamaican men swinging fish around their head?",
    "initials": "DS",
    "answer": "Detroit Spinners",
    "source": "show",
    "series": 2,
    "episode": 23
}`

NB: clue, answer and initials are required.
