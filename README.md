# distance-calculator

Calculate the walking distance between sets of coordinates. Available through message queue RPC calls.

## Queues

### calculateDistance

Calculate the walking distance between two coordinates, belonging to two
separate store locations.

Input:
```
[
  startLocationCoordinates:string,
  endLocationCoordinates:string
]
```

Reponse sucess:
```
{
  walkingDistanceInMinutes:number,
  walkingDistanceInKilometers:number,
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
