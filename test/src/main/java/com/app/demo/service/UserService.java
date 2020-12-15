package com.app.demo.service;

import com.app.demo.model.User;
import com.app.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
         return userRepository.save(user);
    }

    public User fetchUserByEmailId(String emailId) {
        return userRepository.findByEmailId(emailId);
    }

    public User fetchUserByEmailAndPassword(String emailId,String password) {
        return userRepository.findByEmailIdAndPassword(emailId,password);
    }

    public List<User> fetchEmployees() {
        String role = "manager";
        return userRepository.findByRoleNot(role);
    }
}
