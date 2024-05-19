<?php

namespace App\Http\Requests\Admin;
use Illuminate\Validation\Rules\RequiredIf;
use Illuminate\Foundation\Http\FormRequest;

class InfluencerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|unique:influencers',
            'password' => 'required|min:6|confirmed',
            'name_en' => 'required',
            'name_ar' => 'required',
            'image' => new RequiredIf($this['fileuploader-list-image'] == json_encode([])) . '|mimes:' . config('services.allowed_file_extensions.images'),
            'header' => new RequiredIf($this['fileuploader-list-header'] == json_encode([])) . '|mimes:' . config('services.allowed_file_extensions.images'),
            // 'gallery.*' => 'nullable|mimes:' . config('services.allowed_file_extensions.images'),
            'phone' => 'nullable',
            'bio' => 'nullable',
            'percentage' => 'nullable',
            'birthdate' => 'nullable',
            'gender' => 'nullable',
            'facebook_link' => 'nullable',
            'twitter_link' => 'nullable',
            'linkedin_link' => 'nullable'
        ];
    }
}
