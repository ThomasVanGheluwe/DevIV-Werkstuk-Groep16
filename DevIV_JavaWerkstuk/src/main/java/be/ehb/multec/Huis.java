package be.ehb.multec;

public class Huis extends Woning{

    public Huis(String woningAdress, int woningSurface, int woningPrice) {
        super(woningAdress, woningSurface, woningPrice);

        gardenType = new HasAGarden();
    }
}
