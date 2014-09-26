class CorgisController < ApplicationController
  before_action :set_corgi, only: [:show, :edit, :update, :destroy]

  # GET /corgis
  # GET /corgis.json
  def index
    @corgis = Corgi.all
  end

  # GET /corgis/1
  # GET /corgis/1.json
  def show
    @corgi = Corgi.find(params[:id])
    respond_to do |format|
      format.html 
      format.json { render json: @corgi }
    end 
  end

  # GET /corgis/new
  def new
    @corgi = Corgi.new
  end

  # GET /corgis/1/edit
  def edit
  end

  # POST /corgis
  # POST /corgis.json
  def create
    @corgi = Corgi.new(corgi_params)

    if @corgi.save
      respond_to do |format|
        format.html { redirect_to @corgi }
        format.json { render json: @corgi }
      end 
      # redirect_to @corgi, notice: 'Corgi was successfully created.'
    else
      respond_to do |format|
        format.html
        format.json { render status: 404 }
      end 
    end
  end

  # PATCH/PUT /corgis/1
  # PATCH/PUT /corgis/1.json
  def update
    @corgi = Corgi.find(params[:id])
    if @corgi.update(corgi_params)
      respond_to do |format|
        format.html { redirect_to @corgi }
        format.json { render status: 200, json: @corgi }
      end 
    else
      respond_to do |format|
        format.html { render :new }
      end 
    end
  end

  # DELETE /corgis/1
  # DELETE /corgis/1.json
  def destroy
    @corgi = Corgi.find(params[:id])
    @corgi.destroy

    redirect_to corgis_url, notice: 'Corgi was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_corgi
      @corgi = Corgi.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def corgi_params
      params.require(:corgi).permit(:name, :bio, :profile_img, :match)
    end
end
