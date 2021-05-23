package main.java;

public class WoningCreator {
    public static void main(String[] args){

        WoningComponent everyWoning = new WoningGroup("Woning lijst", "Lijst van alle woningen beschikbaar.");

        WoningComponent villa = new WoningGroup("Villa", "Een villa of landhuis is een (meestal) elegante, vrijstaande woning.");
        WoningComponent appartement = new WoningGroup("Appartement", "Een appartement is een woning in een groter gebouw, zoals een flat. Meestal kleiner en goedkoper.");
        WoningComponent huis = new WoningGroup("Huis", "Eenvoudige woningen zonder enige plusjes.");

        //Lijst van woningen
        Woning villa1 = new Villa("4402  Preston Street, Tempe, Arizona", 561, 550000);
        Woning appartement1 = new Appartement("2057  Wood Duck Drive, Evanston, Illinois", 85, 150000);
        Woning appartement2 = new Appartement("1035  Elm Street Evanston, New York", 78, 130000);
        Woning huis1 = new Huis("2990  Rhapsody Street, Gainesville, Florida", 255, 365000);

        everyWoning.add(villa);
        everyWoning.add(appartement);
        everyWoning.add(huis);

        villa.add(villa1);
        appartement.add(appartement1);
        appartement.add(appartement2);
        huis.add(huis1);

        //REMOVE APPARTEMENT 2

        //appartement.remove(appartement2);

        //CHANGE GARDEN OF HUIS 1

        //huis1.setGarden(new HasATinyGarden());

        //Makelaar dient enkel om een realistische situatie na te bootsen
        Makelaar makelaar1 = new Makelaar(everyWoning);
        makelaar1.getWoningList();
        }
    }

