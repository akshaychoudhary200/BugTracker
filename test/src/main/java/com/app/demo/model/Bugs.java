package com.app.demo.model;

import javax.persistence.*;

@Entity
@Table
public class Bugs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bugId;
    private String bugDesc;
    private String bugPriority;
    private String bugStatus;
    private Long userId;
    private Long projectId;

    public Bugs() { }

    public Long getBugId() {
        return bugId;
    }

    public void setBugId(Long bugId) {
        this.bugId = bugId;
    }

    public String getBugDesc() {
        return bugDesc;
    }

    public void setBugDesc(String bugDesc) {
        this.bugDesc = bugDesc;
    }

    public String getBugPriority() {
        return bugPriority;
    }

    public void setBugPriority(String bugPriority) {
        this.bugPriority = bugPriority;
    }

    public String getBugStatus() {
        return bugStatus;
    }

    public void setBugStatus(String bugStatus) {
        this.bugStatus = bugStatus;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    @Override
    public String toString() {
        return "Bugs{" +
                "bugId=" + bugId +
                ", bugDesc='" + bugDesc + '\'' +
                ", bugPriority='" + bugPriority + '\'' +
                ", bugStatus='" + bugStatus + '\'' +
                ", userId=" + userId +
                ", projectId=" + projectId +
                '}';
    }
}
