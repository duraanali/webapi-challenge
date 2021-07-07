import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/projects`)
            .then(res => {
                console.log(res.data)
                setProjects(res);
            })
            .catch(error => {
                console.log('Sorry Error! ', error);
            });
    }, []);


    return (
        <div>
            {projects.map(project => (
                <li key={project}>{project.name}</li>
            ))}

        </div>
    );
}
