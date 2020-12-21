package com.app.demo.controller;

import com.app.demo.model.Project;
import com.app.demo.model.User;
import com.app.demo.repository.ProjectRepository;
import com.app.demo.repository.UserRepository;
import com.app.demo.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ProjectController {
    @Autowired
    private ProjectService projectService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping("/saveproject")
    @CrossOrigin(origins = "http://localhost:4200")
    public Project saveNewProject(@RequestBody Project project) throws Exception {
        if (projectService.fetchByProjectName(project.getProjectName()) != null) {
            throw new Exception("project already created");
        }
        return projectService.saveProject(project);
    }

    @PostMapping("/user/{userId}/projects")
    @CrossOrigin(origins = "http://localhost:4200")
    public Project createProject(@PathVariable(value = "userId") Long userId, @RequestBody Project project) {
        return userRepository.findById(userId).map(user -> {
            project.setUser(user);
            return projectService.saveProject(project);
        }).orElseThrow(() -> new NoSuchElementException());
    }


    @GetMapping("/getprojectlist")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Project> fetchProjectList() {
        List<Project> projectList = null;
        projectList = projectService.getProjectList();
        return projectList;
    }


}
