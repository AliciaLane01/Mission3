using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0,100)]
        public float Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public float Group_Project { get; set; }
        [Required]
        [Range(0, 100)]
        public float Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public float Exams { get; set; }
        [Required]
        [Range(0, 100)]
        public float INTEX { get; set; }
    }
}
