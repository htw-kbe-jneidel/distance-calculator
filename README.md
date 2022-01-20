# distance-calculator

## Queues

### calculateDistance

Calculate the walking distance between two coordinates, belonging to two
separate store locations.

Input:
```
[
  locationCoords1:string,
  locationCoords2:string
]
```

Reponse sucess:
```
{
  walkingDistanceInMinutes:number,
  osmLink:string,
  error:boolean,
}
```

Reponse error:
```
{
  error:boolean,
  errorMsg:string
}
```
