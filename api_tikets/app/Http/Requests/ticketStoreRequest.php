<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ticketStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name_applicant' => 'required|string|max:255|min:3',
            'category' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|string|in:open,closed,in_progress',
            'priority' => 'required|string',
        ];
    }
}
