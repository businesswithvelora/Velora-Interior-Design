/* FILE: src/hooks/useFilteredProjects.js */
import { useMemo } from 'react';

export const useFilteredProjects = (projects = [], category = 'All') => {
  console.log(projects.length);
  return useMemo(() => {
    if (category === "All") {
      return projects;
    } else {
      return projects.filter(p => p.category === category);
    }
  }, [projects, category]);
};
