package be.ehb.multec;

import org.junit.Assert;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;

import java.util.ArrayList;
import java.util.List;


public class TestClass {

    @Test
    public void CompositeTest(){

        WoningComponent everyWoning = new WoningGroup("Woning lijst", "Lijst van alle woningen beschikbaar.");

        WoningComponent villa = new WoningGroup("Villa", "Een villa of landhuis is een (meestal) elegante, vrijstaande woning.");

        Woning villa1 = new Villa("4402  Preston Street, Tempe, Arizona", 561, 550000);

        everyWoning.add(villa);
        villa.add(villa1);

        //Composite test
        assertEquals(everyWoning.getComponent(0).getComponent(0), villa.getComponent(0));
    }

    @Test
    public void IteratorTest(){

        WoningComponent villa = new WoningGroup("Villa", "Een villa of landhuis is een (meestal) elegante, vrijstaande woning.");

        Woning villa1 = new Villa("4402  Preston Street, Tempe, Arizona", 561, 550000);

        Assertions.assertThrows(IllegalArgumentException.class, () -> villa.displayWoningInfo());

    }

    @Test
    public void StrategyTest(){
        Woning huis1 = new Huis("2990  Rhapsody Street, Gainesville, Florida", 255, 365000);
        Woning huis2 = new Huis("2990  Rhapsody Street, Gainesville, Florida", 255, 365000);

        //huis1 & huis2 zijn dezelfde huizen
        Assert.assertEquals(huis1, huis2);

        //We geven nu huis1 geen tuin meer
        huis1.setGarden(new HasNotAGarden());
        Assert.assertFalse(huis1.equals(huis2));
    }
}
