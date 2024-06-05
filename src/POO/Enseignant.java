package POO;

public class Enseignant extends Individu {
	private String specialisation;
	private Double salaireMensuel;

	public Enseignant(String nom, String prenom, int identifiant, String specialisation, Double salaireMensuel) {
		super(nom, prenom, identifiant);
		this.specialisation = specialisation;
		this.salaireMensuel = salaireMensuel;

	}

	public String getSpecialisation() {
		return specialisation;
	}

	public void setSpecialisation(String specialisation) {
		this.specialisation = specialisation;
	}

	public Double getSalaireMensuel() {
		return salaireMensuel;
	}

	public void setSalaireMensuel(Double salaireMensuel) {
		this.salaireMensuel = salaireMensuel;
	}

	@Override
	public void montrerDetails() {
		// TODO Auto-generated method stub

	}

}
