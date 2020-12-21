package com.app.demo.service;

import java.util.*;

import com.app.demo.model.Project;
import com.app.demo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveProject(Project project) {

        return projectRepository.save(project);
    }

    public List<Project> getProjectList() {
        return projectRepository.findAll();
    }

    public Project fetchByProjectName(String projectName) {

        return projectRepository.findByProjectName(projectName);
    }

}
