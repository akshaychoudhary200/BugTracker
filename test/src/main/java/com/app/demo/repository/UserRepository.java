package com.app.demo.repository;

import com.app.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByEmailId(String emailId); // custom created for emailid

    public User findByEmailIdAndPassword(String emailId, String password);

    // method overloading to try
    // public User find(String emailId, String password);
    // public User find(String emailId);

}
