package POO;

public abstract class Individu {
	private String nom;
	private String prenom;
	private int identifiant;

	
public Individu (String nom, String prenom, int indentifiant) {
	this.nom = nom;
	this.prenom = prenom;
	this.identifiant = identifiant;
}





public String getNom() {
	return nom;
}


public void setNom(String nom) {
	this.nom = nom;
}


public String getPrenom() {
	return prenom;
}


public void setPrenom(String prenom) {
	this.prenom = prenom;
}


public int getIdentifiant() {
	return identifiant;
}


public void setIdentifiant(int identifiant) {
	this.identifiant = identifiant;
}
}
