class StudentsController < ApplicationController

  def new
    #This is the method that renders the create a student form for a specific dojo.
    @specificDojo = Dojo.find(params[:dojo_id])
    @dojos = Dojo.all
  end
  
  def create
    #This is the method that processes the newly created a student form. Then redirect it to the index.
    @student = Student.create(firstName: studentParams[:firstName], lastName: studentParams[:lastName], email: studentParams[:email], dojo: Dojo.find(studentParams[:dojo]))
    redirect_to "/dojos/#{studentParams[:dojo]}"
    # redirect_to dojo_url(studentParams[:dojo]) 
  end
  
  def show
    #This is the method that shows a specific student in a specific dojo.
    @specificDojo = Dojo.find(params[:dojo_id])
    @specificStudent = Student.find(params[:id])
    @studentsInDojo = Student.where(dojo_id: params[:dojo_id]).where.not(id: params[:id])
  end

  def edit
    @specificDojo = Dojo.find(params[:dojo_id])
    @specificStudent = Student.find(params[:id])
    @dojos = Dojo.all
  end
  
  def update
    specificDojo = Dojo.find(params[:dojo_id])
    specificStudent = Student.find(params[:id])
    specificStudent.update(firstName: studentParams[:firstName], lastName: studentParams[:lastName], email: studentParams[:email])
    redirect_to "/dojos/#{specificDojo.id}/students/#{specificStudent.id}"
    # /dojos/1/students/21
  end

  def destroy
    @specificDojo = Dojo.find(params[:dojo_id])
    @specificStudent = Student.find(params[:id])
    @specificStudent.destroy
    redirect_to "/dojos/#{@specificDojo.id}"
  end


  private 
  def studentParams
    params.require(:student).permit(:firstName, :lastName, :email, :dojo)
  end

end

