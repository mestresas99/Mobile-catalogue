package domains;

import java.util.Set;

public class User {
	Set <Mobile> mobile;
	
	public User() {
		
	}

	public User(Set<Mobile> mobile) {
		super();
		this.mobile = mobile;
	}

	public Set<Mobile> getMobile() {
		return mobile;
	}

	public void setMobile(Set<Mobile> mobile) {
		this.mobile = mobile;
	}
	
	

}
