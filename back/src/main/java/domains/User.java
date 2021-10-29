package domains;

import java.util.Set;

public class User {
	
	String name;
	int age;
	Set<Address> address;
	
	public User() {
		
	}
	
	public User(String name, int age, Set<Address> address) {
		super();
		this.name = name;
		this.age = age;
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Set<Address> getAddress() {
		return address;
	}
	public void setAddress(Set<Address> address) {
		this.address = address;
	}

}
