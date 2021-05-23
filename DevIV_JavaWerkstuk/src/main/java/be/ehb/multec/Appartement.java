package main.java;

public class Appartement extends Woning {

    public Appartement(String woningAdress, int woningSurface, int woningPrice) {
        super(woningAdress, woningSurface, woningPrice);

        gardenType = new HasNotAGarden();
    }
}
