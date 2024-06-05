package POO;

import java.util.Date;

public class main {

	    public main(String[] args) {
	        Etudiant etudiant = new Etudiant("Noureddine", "Stamboul", 001,
	                new Date(), "BAC+3");
	        etudiant.montrerDetails();
	    }
}