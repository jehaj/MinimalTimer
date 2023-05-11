# MinimalTimer
Denne hjemmeside er lavet til at bruge i OBS Studio. Den virker kun til bestemte formål.

URL: https://jehaj.github.io/MinimalTimer/index.html?10:00

Bemærk det sidste "?10:00", hvor klokkeslættet bestemmer hvad der skal tælles ned til. 

Nedenstående indstillinger virker godt, men man skal være forberedt på at prøve sig frem.
```
Width: 480
Height: 240
```

```
body { 
  background-color: rgba(0, 0, 0, 0) !important;
  font-size: 170px !important;
  margin: auto;
  overflow: hidden; 
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Det er muligt at ændre tekstfarven ved at ændre body eller div blokken ved at tilføje
```
color: rgb(255, 255, 0);
```
