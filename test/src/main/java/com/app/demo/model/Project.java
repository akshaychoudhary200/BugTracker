package com.app.demo.model;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
@Table
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;
    @Column(nullable = false)
    private String projectName;
    @Column(nullable = false)
    private String projectStatus;
    @Column(nullable = false)
    private String projectTitle;
    @Column(nullable = false)
    private String projectDesc;

    public Project() { }

    public Long getProjectId() {
        return projectId;
    }
    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectStatus() {
        return projectStatus;
    }
    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus;
    }

    public String getProjectTitle() {
        return projectTitle;
    }
    public void setProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
    }

    public String getProjectDesc() {
        return projectDesc;
    }
    public void setProjectDesc(String projectDesc) {
        this.projectDesc = projectDesc;
    }

    @Override
    public String toString() {
        return "Project{" +
                "projectId=" + projectId +
                ", projectName=" + projectName +
                ", projectStatus=" + projectStatus +
                ", projectTitle=" + projectTitle +
                ", projectDesc=" + projectDesc +
                '}';
    }
}
