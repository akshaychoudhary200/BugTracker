package com.app.demo.repository;

import com.app.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByEmailId(String emailId); // custom created for emailid

    public User findByEmailIdAndPassword(String emailId, String password);

    public List<User> findByRoleNot(String role);
    //public List<User> findAll();

    // method overloading to try
    // public User find(String emailId, String password);
    // public User find(String emailId);

}
