package com.app.demo.repository;

import com.app.demo.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project,Long> {

    public Project findByProjectName(String projectName);

}
