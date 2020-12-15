package com.app.demo.controller;

import com.app.demo.model.Project;
import com.app.demo.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping("/saveproject")
    @CrossOrigin(origins = "http://localhost:4200")
    public Project saveNewProject(@RequestBody Project project) throws Exception {
        if(projectService.fetchByProjectName(project.getProjectName()) != null) {
            throw new Exception("project already created");
        }
        return projectService.saveProject(project);
    }
}
