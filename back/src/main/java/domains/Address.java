package domains;

public class Address {

	String name;
	int zip_code;
	
	public Address() {
		
	}
	
	public Address(String name, int zip_code) {
		super();
		this.name = name;
		this.zip_code = zip_code;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getZip_code() {
		return zip_code;
	}
	public void setZip_code(int zip_code) {
		this.zip_code = zip_code;
	}
}
